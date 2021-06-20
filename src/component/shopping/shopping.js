import React from "react"
import Navs from "../navs/navs";
import Product from "../content/product/product";
import Cart from "../content/cart/cart";
//
import "./shopping.css";
import Data from "../data/data";
import SimpleCurrency from "../utils/SimpleCurrency";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/shoppingCart/shoppingAction";

function Shopping() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems);


    const handleCart = (id, image, name, price) => {
        dispatch(
            addCart(
                {
                    id: id,
                    image: image,
                    name: name,
                    price: price,
                    quantity: 1
                }
            )
        );

    }

    return (
        <>
            <Navs />
            <div className="product-container">
                <div className={cart.length === 0 ? "product" : "product-second"}>
                    {Data.map((item, index) => {
                        return (
                            <Product
                                key={index}
                                src={item.image}
                                title={item.name}
                                price={`Rp ${SimpleCurrency(item.price.toFixed(0))}`}
                                onClick={() => handleCart(item.id, item.image, item.name, item.price)}
                            />
                        )
                    })}
                </div>
            </div>
            <Cart />
        </>
    )
}
export default Shopping;