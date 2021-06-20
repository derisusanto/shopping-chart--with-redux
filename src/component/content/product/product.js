import React from "react";
import "./product.css"

function Product({ title, src, price, onClick }) {
    return (
        <div className="product-containt">
            <div className="img-product">
                <img width="100px" height="auto" src={src} alt="img-product" />
            </div>
            <div className="product-detail">
                <div className="detail-containt">
                    <div className="product-name">
                        <label>{title}</label>
                    </div>
                    <div className="product-price">
                        <label>{price}</label>
                    </div>
                    <div className="action">
                        <button className="button" onClick={onClick} >Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;