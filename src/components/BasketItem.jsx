function BasketItem(props) {
  const {
    mainId,
    displayName,
    finalPrice,
    count,
    removeFromBasket,
    changeCount,
  } = props;
  return (
    <li className="collection-item ">
      {displayName} в количестве{" "}
      <i className="material-icons" onClick={() => changeCount(mainId, -1)}>
        exposure_neg_1
      </i>{" "}
      {count}шт.{" "}
      <i className="material-icons" onClick={() => changeCount(mainId, +1)}>
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
