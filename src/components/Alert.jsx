import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function Alert(props) {
  const { alertName = "", closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timeoutId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [alertName]);

  return (
    <div id="toast-container">
      <div className="toast">{alertName} добавлен к корзину</div>
    </div>
  );
}

export { Alert };
