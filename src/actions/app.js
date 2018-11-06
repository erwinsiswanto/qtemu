export const changePageTitle = (newPageTitle) => {
    return {
        type: 'PAGE_TITLE_CHANGE',
        payload: {
            newPageTitle: newPageTitle
        }
    }
};

export const changeCopyrightYear = (newYear) => {
    return {
        type: 'PAGE_YEAR_CHANGE',
        payload: {
            newYear: newYear
        }
    }
};