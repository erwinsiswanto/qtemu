const initialState = {
    userData: [],
    userTotal: 0,
};

const memberReducer = (state = initialState, action) => {
    //return state; //sama sekali ga ada perubahan

    //case ketika ada perubahaan (action)
    switch (action.type)
    {
        case 'ADD_MEMBERS' :
            return {
                ...state,
                userData: action.payload.members,
            };

        default:
            return state;
    }
};

export default memberReducer;