import React from 'react';
import {connect} from "react-redux";

class FetchUsers extends React.Component {
    fetchUsers() {
        if (this.props.gitUsers.term !== '') {
            fetch(`https://api.github.com/search/users?q=${this.props.gitUsers.term}`)
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
            <span>{this.props.gitUsers.term !== '' ? 'Github Users:' : 'Type something in search input above'}</span>
        )
    }
}

function mapStateToProps(state) {
    return ({
        gitUsers: state.gitUsers
    })
}

export default connect(mapStateToProps)(FetchUsers)