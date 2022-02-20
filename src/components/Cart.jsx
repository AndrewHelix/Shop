

function Cart(props) {
  const {elements = 0, handleBasketShow} = props;

  return (
    <div className="cart deep-orange" onClick={handleBasketShow}>
      <i className="material-icons ">shopping_cart</i>
      {
        elements ? <span className="cart-elements">{elements}</span> : null
      }
    </div>
  )
}

export {Cart}