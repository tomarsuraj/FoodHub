import {ADD_ORDER, ORDER_COMPLETE_STATUS, REMOVE_ORDER} from './action.type';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ORDER: {
      const {orders} = state;
      const {id, newOrder} = action.payload;
      orders[id] = newOrder;
      return {...state, orders};
    }
    case REMOVE_ORDER: {
      const {orders} = state;
      const id = action.payload;
      delete orders[id];
      return {...state, orders};
    }
    case ORDER_COMPLETE_STATUS: {
      const id = action.payload.id;
      const orders = state.orders;
      orders[id].completed = action.payload.value;
      return {...state, orders};
    }
    default:
      return state;
  }
};
export default reducer;
