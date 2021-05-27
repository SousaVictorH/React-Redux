const INITIAL_STATE = {
    users: [],
};

export default function Reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload.users
            }
    
        default:
            return state;
    }
};
