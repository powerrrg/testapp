const defaultState = {
    userName: '',
};

export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOG_IN':
            return Object.assign({}, state, {
                userName: action.payload.userName,
            });
       default:
            return state;
    }
}