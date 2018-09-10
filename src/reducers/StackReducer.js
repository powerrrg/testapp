const defaultState = {
    questionsList: [],
};

export default function stackReducer(state = defaultState, action) {
    switch (action.type) {
        case 'SEARCH':
            return Object.assign({}, state, {
                questionsList: action.payload,
            });
       default:
            return state;
    }
}