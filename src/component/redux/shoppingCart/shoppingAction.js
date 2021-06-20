import { cartType } from "./shoppingTypes";

export const addCart = (item) => ({
    type: cartType.ADD_ITEM_CART,
    payload: item,

});

export const clearItemCart = (index) => ({
    type: cartType.CLEAR_ITEM_CART,
    payload: index,

});