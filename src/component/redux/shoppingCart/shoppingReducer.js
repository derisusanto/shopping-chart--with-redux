import { cartType } from "./shoppingTypes";

const INITIAL_STATE = {
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartType.ADD_ITEM_CART:
            // console.log(action.payload.quantity);
            let prevAddToCart = [...state.cartItems];
            let FindId = prevAddToCart.filter(item => item.id === action.payload.id);
            console.log(FindId.map((item) => item.quantity));
            if (FindId.length !== 0) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, FindId.map((item) => (item.quantity + 1))]
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                };
                // return {
                //     ...state,
                //     cartItems: [...state.cartItems, action.payload]
                // }
            }
        case cartType.CLEAR_ITEM_CART:
            let prevCartSubtract = [...state.cartItems];
            if (prevCartSubtract[action.payload] !== -1) {
                prevCartSubtract.splice(action.payload, 1);
            }
            return {
                ...state,
                cartItems: prevCartSubtract,
            };
        default:
            return state;
    }
};
export default cartReducer;
