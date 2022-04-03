import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const categories = createContext();

const CategoryContextProvider = ({ children }) => {

    const [categorydata,setCategoryItems] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const categoryData = await axios.get("/api/categories");
                setCategoryItems(categoryData.data.categories);
            }catch (error){
                console.log(error);
            }
        })();
    },[]);

    return(
        <categories.Provider value={{categorydata}}>
            {children}
        </categories.Provider>
    );
};
const useCategories = () => useContext(categories);

export {useCategories,CategoryContextProvider} ;