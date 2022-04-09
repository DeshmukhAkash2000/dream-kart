
import { createContext, useContext, useReducer  } from "react";

const context = createContext();

const WishlistAndCartProvider = ({ children}) => {


    const WishlistAndCartReducer = (state, action) => {

        switch (action.type) {
            case "ADD_TO_WISHLIST":
                if (!state.wishlist.includes(action.payload)) {
                    return{...state, wishlist:[...state.wishlist, action.payload]};
                }
            case "REMOVE_FROM_WISHLIST":
                const newWishList = state.wishlist.filter(item => item.id !== action.payload.id);
                return {...state, wishlist:newWishList};

            
            case "ADD_TO_CART":
                action.payload = {...action.payload, cartQuantity:1}
                return {...state,cart:[...state.cart, action.payload]};

            
            case "REMOVE_FROM_CART":
                const newCart = state.cart.filter(item => item.id !== action.payload.id);
                return {...state,cart:newCart};

            case "INCREASE_ITEMS":
                let addedItems = state.cart.map(items => items.id === action.payload.id ?
                    {...items,cartQuantity:items.cartQuantity+1 } : items);
                return{...state,cart:[...addedItems]};
            

            case "DECREASE_ITEMS":
                if (action.payload.cartQuantity>=1) {
                    let removedItems = state.cart.map(items => items.id === action.payload.id?
                        {...items, cartQuantity:items.cartQuantity-1} : items);
                    return{...state,cart:[...removedItems]};
                }
            default:
                return{...state}
            
        }
    }

    const [wishListCartValues, dispatchWishListCart] = useReducer(WishlistAndCartReducer,
        {
            wishlist:[],
            cart:[]
        })

    return(
        <context.Provider value={{wishListCartValues, dispatchWishListCart}}>

            { children }

        </context.Provider>
    );
    
};

const useWishListCartContext = () => useContext(context);

export { WishlistAndCartProvider, useWishListCartContext};