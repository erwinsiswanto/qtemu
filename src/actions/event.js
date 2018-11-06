import axios from 'axios';

export const fetchEvents = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/films/')
            .then(response => {
                const events = response.data.results.slice(0, 3);

                dispatch({
                    type: 'ADD_EVENT',
                    payload: {
                        events: events
                    }
                })
            })
    }
};