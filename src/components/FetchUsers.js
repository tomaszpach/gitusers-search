import React from 'react';
import {connect} from "react-redux";

class FetchUsers extends React.Component {
    fetchUsers() {
        if (this.props.gitUsers.term !== '') {
            fetch(`https://api.github.com/search/users?q=${this.props.gitUsers.term}&access_token=d6c9b91e21dd6975db5aaceb9b0c5af8d49d1216`)
                .then(response => response.json())
                .then(results => {
                    this.props.dispatch({
                        type: 'FETCH_USERS',
                        results: results
                    });
                })
        } else {
            this.props.dispatch({
                type: 'FETCH_USERS',
                results: {}
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.gitUsers.term !== this.props.gitUsers.term) {
            this.fetchUsers()
        }
    }

    render() {
        return (
            <div>{this.props.gitUsers.term !== '' ? 'Github Users:' : 'Type something in search input'}</div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        gitUsers: state.gitUsers
    })
}

export default connect(mapStateToProps)(FetchUsers)