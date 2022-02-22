import { useContext } from "react";
import { ShopContext } from "../context";

function Cart() {
  const {order, handleBasketShow} = useContext(ShopContext);

  return (
    <div className="cart deep-orange" onClick={handleBasketShow}>
      <i className="material-icons ">shopping_cart</i>
      {
        order.length ? <span className="cart-elements">{order.length}</span> : null
      }
    </div>
  )
}

export {Cart}