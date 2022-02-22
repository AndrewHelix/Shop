export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: payload || [],
        loading: false
      }
    
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((item) => item.mainId !== payload.id),
      };

    case "ADD_TO_BASKET": {
      const indexItem = state.order.findIndex(
        (el) => el.mainId === payload.mainId
      );

      let newOrder = null;
      if (indexItem < 0) {
        const newItem = {
          ...payload,
          count: 1
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((el, i) => {
          if (i === indexItem) {
            return {
              ...el,
              count: el.count + 1,
            };
          } else {
            return el;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }

    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "CHANGE_COUNT": {
      const newOrder = state.order.map((el) => {
        if (el.mainId === payload.id) {
          if (el.count === 0 && payload.num < 0) {
            return el;
          } else {
            return {
              ...el,
              count: el.count + payload.num,
            };
          }
        }
        return el;
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    default:
      return state;
  }
}
