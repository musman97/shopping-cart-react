import React, { createContext, useReducer } from "react";
import { img1, img2, img3, img4, img5, img6 } from "../images";
import CartReducer, {
    ADD_NEW_ITEM,
    REMOVE_ITEM,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "./CartReducer";

const initialState = {
    items: [
        {
            id: 1,
            imgSrc: img1,
            title: "Shoe 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 110,
        },
        {
            id: 2,
            imgSrc: img2,
            title: "Shoe 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 115,
        },
        {
            id: 3,
            imgSrc: img3,
            title: "Shoe 3",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 500,
        },
        {
            id: 4,
            imgSrc: img4,
            title: "Shoe 4",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 300,
        },
        {
            id: 5,
            imgSrc: img5,
            title: "Shoe 5",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 150,
        },
        {
            id: 6,
            imgSrc: img6,
            title: "Shoe 6",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 700,
        },
    ],
    cart: [],
};

export const GlobalContext = createContext(initialState);

function Provider(props) {
    const [state, dispatch] = useReducer(CartReducer, initialState);
    const addItemToCart = (id) => {
        const cartItem = state.cart.find((cartItem) => cartItem.id === id);
        if (!cartItem) {
            const item = state.items.find((item) => item.id === id);
            item.quantity = 1;
            dispatch({
                type: ADD_NEW_ITEM,
                payload: item,
            });
        } else {
            dispatch({
                type: INCREASE_QUANTITY,
                payload: id,
            });
        }
    };
    const removeItemFromCart = (id) => {
        dispatch({
            type: REMOVE_ITEM,
            payload: id,
        });
    };
    const increaseQuantity = (id) => {
        dispatch({
            type: INCREASE_QUANTITY,
            payload: id,
        });
    };
    const decreaseQuantity = (id) => {
        dispatch({
            type: DECREASE_QUANTITY,
            payload: id,
        });
    };
    return (
        <GlobalContext.Provider
            value={{
                items: state.items,
                cart: state.cart,
                addItemToCart,
                removeItemFromCart,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default Provider;
