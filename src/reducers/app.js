const initialState = {
    pageTitle: 'QTemuRedux',
    copyrightYear: 2018,
};

const appReducer = (state = initialState, action) => {
    //return state; //sama sekali ga ada perubahan

    //case ketika ada perubahaan (action)
    switch (action.type)
    {
        case 'PAGE_TITLE_CHANGE':
            return {
                ...state,
                pageTitle: action.payload.newPageTitle
            };
        case 'PAGE_YEAR_CHANGE':
            return {
                ...state,
                copyrightYear: action.payload.newYear
            };
        default:
            return state;
    }
};

export default appReducer;