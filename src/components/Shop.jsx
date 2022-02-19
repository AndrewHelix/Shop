import { useState, useCallback, useEffect } from "react"
import { API_KEY, API_URL  } from "../config";
import { ItemsList } from "./ItemsList";
import { Preloader } from "./Preloader";

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
    {
      loading ? <Preloader /> : <ItemsList items={items}/>
    }
  </main>
}

export {Shop}