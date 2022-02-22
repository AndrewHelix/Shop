import { useContext } from "react";
import { ShopContext } from "../context";
import { BasketItem } from "./BasketItem";

function BasketList() {
  const { order, handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce(
    (acc, item) => (acc += item.finalPrice * item.count),
    0
  );
  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Basket
        <span className="secondary-content basket-pointer">
          <i className="material-icons" onClick={handleBasketShow}>
            close
          </i>
        </span>
      </li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item ">Пусто</li>
      )}
      <li className="collection-item active">
        Total {totalPrice}$
        <button className="secondary-content btn-small">Buy</button>
      </li>
    </ul>
  );
}

export { BasketList };
