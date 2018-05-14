import React from 'react';

import SearchUsers from './SearchUsers';
import FetchUsers from './FetchUsers';
import ResultsList from './ResultsList';

export default class GitSearchUsers extends React.Component {
    render() {
        return (
            <div id="git-users-search">
                <SearchUsers/>
                <FetchUsers/>
                <ResultsList/>
            </div>
        )
    }
}