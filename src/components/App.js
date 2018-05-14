import React from 'react';

import SearchUsers from './SearchUsers';
import FetchUsers from './FetchUsers';
import ResultsList from './ResultsList';

export default class App extends React.Component {
    render() {
        return (
            <div id="git-users-search" className="container">
                <SearchUsers/>
                <FetchUsers/>
                <ResultsList/>
            </div>
        )
    }
}