import {
    FETCH_USERS,
} from './../actions/TypeActions';

const INITIAL_STATE = {
    users: []
}

export default ( state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        
        case FETCH_USERS:
            return { ...state, users: action.payload };

        default:
            return INITIAL_STATE;
    }
}