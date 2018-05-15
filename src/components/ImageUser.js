import React from 'react';
import { Image } from 'react-bootstrap';

export default class ImageUser extends React.Component {
    render() {
        return (
            <Image src={this.props.userImage} thumbnail circle />
        )
    }
}

ImageUser.propTypes = {
    userImage: React.PropTypes.string.isRequired
};