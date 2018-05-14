import React from 'react';
import {connect} from 'react-redux';

class ResultsList extends React.Component {
    render() {
        return (
            Object.keys(this.props.gitUsers.results).length > 0 ? (
                <div id="results">
                    <ul>
                        {
                            this.props.gitUsers.results.items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={`https://github.com/${item.login}`} target="_blank">
                                            <img src={item.avatar_url}/>
                                            {item.login}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            ) : null
        )
    }
}

function mapStateToProps(state) {
    return ({
        gitUsers: state.gitUsers
    })
}

export default connect(mapStateToProps)(ResultsList);