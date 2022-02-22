import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ItemsList } from "./ItemsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

import { ShopContext } from "../context";

function Shop() {
  const { loading, order, isBasketShow, alertName, setItems } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data.shop);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="container content">
      <Cart elements={order.length} />
      {loading ? <Preloader /> : <ItemsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };