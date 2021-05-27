const INITIAL_STATE = {
    user: null,
};

export default function Reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            }
    
        default:
            return state;
    }
};
