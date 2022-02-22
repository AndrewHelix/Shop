import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext()

const initialState = {
  items: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: ''
}

export const ShopProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState) 

  state.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  }

  state.removeFromBasket = (id) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id}})
  }

  state.addToBasket = (item) => {
    dispatch({type: "ADD_TO_BASKET", payload: item})
  }

  state.handleBasketShow = () => {
    dispatch({type: 'HANDLE_BASKET_SHOW'})
  }

  state.changeCount = (id, num) => {
    dispatch({type: 'CHANGE_COUNT', payload: {id, num}})
  }

  state.setItems = (data) => {
    dispatch({type: 'SET_ITEMS', payload: data})
  }

  return <ShopContext.Provider value={state}>
    {props.children}
  </ShopContext.Provider>
}