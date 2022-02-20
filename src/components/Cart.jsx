

function Cart(props) {
  const {elements = 0} = props;

  return (
    <div className="cart deep-orange">
      <i className="material-icons ">shopping_cart</i>
      {
        elements ? <span className="cart-elements">{elements}</span> : null
      }
    </div>
  )
}

export {Cart}