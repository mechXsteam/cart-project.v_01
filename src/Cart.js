import React from 'react';
import Cartitem from "./Cartitem";

const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => {
                return (
                    <Cartitem
                        product={product}
                        key={product.key}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}
                    />
                )
            })}
        </div>
    );
}

export default Cart;