import { useState, useCallback, useEffect } from "react"
import { API_KEY, API_URL  } from "../config";
import { ItemsList } from "./ItemsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([])

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

  return <main className="container content">
    <Cart elements={order.length} />
    {
      loading ? <Preloader /> : <ItemsList items={items} addToBasket={addToBasket}/>
    }
  </main>
}

export {Shop}