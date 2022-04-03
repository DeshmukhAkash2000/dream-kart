export const productReducer = (state, action) => {


    switch (action.type) {
        case "SORT_BY_PRICE":
            return {... state, sort: action.payload };
        case "FILTER_BY_STOCK":
            return {...state, byStock: !state.byStock};
        case "FILTER_BY_DELIVERY":
            return {...state, byFastDelivery: !state.byFastDelivery};
        case "CATEGORY":
            if(!state.category.includes(...action.payload)){
                return {...state, category:[...state.category,...action.payload]};
            }else{
                const array = state.category.filter(data => data !==action.payload[0]);
                return {...state,category:array};
            }
        case "RATING":
            return {...state, byRating:action.payload};
        case "SEARCH":
            return {...state, bySearch:action.payload};
        case "RANGE":
            return {...state, byRange:action.payload};
        case "CLEAR":
            return {
                sort: null,
                byStock: false,
                byFastDelivery: false,
                category:[],
                byRating: null,
                bySearch: "",
                byRange: null
            }
            default:
            return state;
    }
}