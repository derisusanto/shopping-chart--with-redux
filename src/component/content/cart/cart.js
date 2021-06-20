import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearItemCart } from "../../redux/shoppingCart/shoppingAction";
import SimpleCurrency from "../../utils/SimpleCurrency";
import "./cart.css";

function Cart() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems);

    const Cancel = (index) => {
        dispatch(clearItemCart(index));
    }

    return (
        <>
            <div className={cart.length === 0 ? "none" : "cart-container"}>
                <div className="cart">
                    <div className="cart-header">
                        <h1>keranjang</h1>
                    </div>
                    <div className="cart-containt">
                        {cart?.map((item, index) => {
                            return (
                                <>
                                    <div>
                                        <img src={item.image} alt={item.image} width="70px" height="70px" />
                                        <div className="name-product" >{item.name}</div>
                                        <div className="quantity-product" >{item.quantity}</div>
                                        <div className="price-product" >Rp{SimpleCurrency(item.price)}</div>
                                        <button onClick={() => Cancel(index)}>x</button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Cart;