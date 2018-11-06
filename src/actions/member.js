import axios from 'axios';

export const fetchMembers = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/people/')
            .then(response => {
                const members = response.data.results;

                dispatch({
                    type: 'ADD_MEMBERS',
                    payload: {
                        members: members
                    }
                })
            })
    }
};