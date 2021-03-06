import { useContext } from "react";
import { ShopContext } from "../context";
import { Item } from "./Item";

function ItemsList() {
  const { items = []} = useContext(ShopContext);

  if (!items.length) {
    return <h2>Nothing</h2>;
  }

  return (
    <div className="items">
      {items.map((item) => (
        <Item key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export { ItemsList };
