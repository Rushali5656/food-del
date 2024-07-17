// import React from "react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems,setCartItems]=useState({});
  const url="https://backend-for-food-del.onrender.com";
  const [token,setToken]=useState("")
  const [food_list, setFoodList]=useState([])
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 })); 
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
  
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
        console.log(`Decrementing item ${itemId}:`, updatedCart);
      } else {
        delete updatedCart[itemId];
        console.log(`Removing item ${itemId}:`, updatedCart);
      }
  
      return updatedCart;
    });
  };

  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const item in cartItems) {
      if (cartItems[item] && cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
  
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
  
    return totalAmount;
  };
  const fetchFoodList =async ()=>{
    const response =await axios.get(url +"/api/food/list")
    setFoodList(response.data.data)

  }
  useEffect(()=>{

  fetchFoodList()

  },[])
  
  
  const contextValue = {
   
    food_list, cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount,url,token,setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
