// import { createContext, useEffect } from "react";
// import { food_list } from "../assets/assets";

//  export const StoreContext = createContext(null)

// const StoreContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState({});
//     const addToCart = (itemId) => {
//         if(!cartItems[itemId]){
//             setCartItems((prev)=> ({...prev,[itemId]:1}))
//         }
//         else{
//             setCartItems((prev) =>({...prev,[itemId]:prev[itemId] +1}))
//         }
//     }
//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
//     }


//     useEffect(() => {
//         console.log(cartItems);
//     }, [cartItems]);
    
   


//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart

//     }
//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }

// export default StoreContextProvider;



import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        if (cartItems[itemId] === 1) {
            // If only one item, remove it from cart
            const updatedCartItems = { ...cartItems };
            delete updatedCartItems[itemId];
            setCartItems(updatedCartItems);
        } else if (cartItems[itemId] > 1) {
            // If more than one item, decrement quantity
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if (cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item)
                 totalAmount += itemInfo.price*cartItems[item];

            }
        }
        return totalAmount;
    }


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
