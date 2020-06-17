const ADD_NEW_ITEM = "ADD_NEW_ITEM";
const INCREASE_QUANTITY = "INCREASE_QUANTITY";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const REMOVE_ITEM = "REMOVE_ITEM";

export default (state, action) => {
    switch (action.type) {
        case ADD_NEW_ITEM: {
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        }
        case INCREASE_QUANTITY: {
            state.cart.find((cartItem) => cartItem.id === action.payload)
                .quantity++;
            return {
                ...state,
                cart: [...state.cart],
            };
        }
        case DECREASE_QUANTITY: {
            const cartItem = state.cart.find(
                (cartItem) => cartItem.id === action.payload
            );
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
            }
            return {
                ...state,
                cart: [...state.cart],
            };
        }
        case REMOVE_ITEM: {
            return {
                ...state,
                cart: state.cart.filter(
                    (cartItem) => cartItem.id !== action.payload
                ),
            };
        }
        default:
            return state;
    }
};

export { ADD_NEW_ITEM, REMOVE_ITEM, INCREASE_QUANTITY, DECREASE_QUANTITY };
