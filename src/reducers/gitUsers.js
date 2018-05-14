const initialState = {
    term: '',
    results: {}
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_SEARCH_TERM':
            return {
                ...state,
                term: action.term
            };

        case 'FETCH_USERS':
            return {
                ...state,
                results: action.results
            };

        default:
            return state;
    }
}