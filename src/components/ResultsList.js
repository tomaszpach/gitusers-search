import React from 'react';
import {connect} from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import ImageUser from './ImageUser';

let ResultsList = ({ gitUsers }) => {
        return (
            Object.keys(gitUsers.results).length > 0 ? (
                <div id="results">
                    <ListGroup>
                        {
                            gitUsers.results.items.map((item, index) => {
                                return (
                                    <ListGroupItem key={index} href={item.html_url}>
                                        <ImageUser userImage={item.avatar_url}/> {item.login}
                                        </ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
                </div>
            ) : null
        )
};

function mapStateToProps(state) {
    return ({
        gitUsers: state.gitUsers
    })
}

export default connect(mapStateToProps)(ResultsList);