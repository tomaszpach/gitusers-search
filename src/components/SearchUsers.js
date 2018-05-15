import React from 'react';
import {connect} from "react-redux";
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class SearchUsers extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        }, () => {
            this.props.dispatch({
                type: 'UPDATE_SEARCH_TERM',
                term: this.state.value
            })
        });
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
                        <FormControl type="text" value={this.state.value}
                                     placeholder="Enter text"
                                     onChange={this.handleChange} />
                        <InputGroup.Addon>
                            <Glyphicon glyph="user" />
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}

export default connect()(SearchUsers)