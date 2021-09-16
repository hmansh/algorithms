const initialState = {
    companyData : [],
    jobData: [],
};

export const rootReducer = ( state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT_COUNT":
            return {
                ...state,
                companyData: state.companyData.filter(item => {
                    if (item.uid === action.uid){
                        return {
                            ...item,
                            upvotes: item.upvotes++,
                        }    
                    } return item;
                }),
            };
        default :
            return state;
    }
};