import {
    FETCH_USERS
} from './TypeActions';
import axios from 'axios';

export const fetchUsers = qtd => {

    return dispatch => {
        return new Promise((resolve) => {
            axios.get(`https://randomuser.me/api/?results=${qtd}`)
            .then(result => {
                dispatch({
                    type: FETCH_USERS,
                    payload: result.data.results
                });
                resolve(true);
            });
        });
    }
}
