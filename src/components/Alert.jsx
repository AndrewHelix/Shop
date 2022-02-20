import { useEffect } from "react";

function Alert(props) {
  const { name = "", closeAlert } = props;

  useEffect(() => {
    const timeoutId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен к корзину</div>
    </div>
  );
}

export { Alert };
