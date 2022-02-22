import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const {
    mainId,
    displayName,
    finalPrice,
    count,
  } = props;

  const {removeFromBasket, changeCount} = useContext(ShopContext)

  return (
    <li className="collection-item ">
      {displayName} в количестве{" "}
      <i className="material-icons change-count" onClick={() => changeCount(mainId, -1)}>
        exposure_neg_1
      </i>{" "}
      {count}шт.{" "}
      <i className="material-icons change-count" onClick={() => changeCount(mainId, +1)}>
        exposure_plus_1
      </i>{" "}
      = {finalPrice * count}$
      <span
        className="secondary-content basket-pointer"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons">delete_forever</i>
      </span>
    </li>
  );
}

export { BasketItem };
