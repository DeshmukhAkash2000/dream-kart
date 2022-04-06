import { useContext, createContext, useEffect, useState, useReducer} from "react";
import { productReducer } from "./ReduceFunc";
import axios from "axios";

const productContext = createContext();

const ProductListProvider = ({ children }) => {

    const [productState, productDispatch] = useReducer(productReducer,{
                
                sort: null,
                byStock: false,
                byFastDelivery: false,
                category:[],
                byRating: null,
                bySearch: "",
                byRange: null

    })

    const [product, setProduct] = useState([{}]);

    useEffect(() => {
        (async () => {
            try{
                const response = await axios.get("/api/products");
                setProduct(response.data.products);
            }
            catch(error){
                console.log(error);
            };
        })();
    },[]);

    return(
        <productContext.Provider value={{ product, productState, productDispatch }}>
            { children }
        </productContext.Provider>
    );
};

const useProductContext = () => useContext(productContext);

export { useProductContext,ProductListProvider} ;