import React from 'react';
import {connect} from "react-redux";

class SearchUsers extends React.Component {
    constructor(props) {
        super(props);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
    }

    render() {
        return (
            <input type="text" placeholder="search" onChange={this.updateSearchTerm}/>
        )
    }

    updateSearchTerm(event) {
        this.props.dispatch({
            type: 'UPDATE_SEARCH_TERM',
            term: event.target.value
        })
    }
}

export default connect()(SearchUsers)

