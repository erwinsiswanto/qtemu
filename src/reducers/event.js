const initialState = {
    events: []
};

const eventReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'ADD_EVENT':
            return {
                ...state,
                events: action.payload.events
            };
        default:
            return state;
    }
};

export default eventReducer;