import {ADD_ORDER, ORDER_COMPLETE, REMOVE_ORDER} from './action.type';

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
    case ORDER_COMPLETE: {
      const id = action.payload;
      const orders = state.orders;
      orders[id].completed = true;
      console.log('id', id);
      return {...state, orders};
    }
    default:
      return state;
  }
};
export default reducer;
