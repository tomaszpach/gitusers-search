import React from 'react';
import {connect} from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import ImageUser from './ImageUser';

class ResultsList extends React.Component {
    render() {
        return (
            Object.keys(this.props.gitUsers.results).length > 0 ? (
                <div id="results">
                    <ListGroup>
                        {
                            this.props.gitUsers.results.items.map((item, index) => {
                                return (
                                    <ListGroupItem key={index} href={`https://github.com/${item.login}`}>
                                        <ImageUser userImage={item.avatar_url}/> {item.login}
                                        </ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
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