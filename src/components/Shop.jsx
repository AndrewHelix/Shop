import { useState, useCallback, useEffect } from "react"
import { API_KEY, API_URL  } from "../config";
import { ItemsList } from "./ItemsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false)

  const addToBasket = (item) => {
    const indexItem = order.findIndex(el => el.mainId === item.mainId)

    if (indexItem < 0) {
      setOrder([...order, {...item, count: 1}])
    } else {
      const newOrder = order.map((el, i) => {
        if (i === indexItem) {
          return {
            ...el,
            count: el.count + 1
          }
        } else {
          return el
        }
      })

      setOrder(newOrder)
    }
  }

  const removeFromBasket = (id) => {
    setOrder(order.filter(item => item.mainId !== id))
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  const changeCount = (id, num) => {
    
    const index = order.findIndex(el => el.mainId === id)
    
    const newOrder = order.map(el => {
      if  (el.mainId === id) {
        if (el.count === 0 && num < 0) {
          return el
        } else {
          return {
            ...el,
            count: el.count + num
          }
        }
      }
      return el
    })
    setOrder(newOrder)
  }

  useEffect(() => {
  
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      }
    }).then(res => res.json())
      .then(data => {
        data.shop && setItems(data.shop)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  return <main className="container content">
    <Cart elements={order.length} handleBasketShow={handleBasketShow}/>
    {
      loading ? <Preloader /> : <ItemsList items={items} addToBasket={addToBasket}/>
    }
    {
      isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} changeCount={changeCount}/> 
    }
  </main>
}

export {Shop}