import React, {useReducer} from 'react';
import reducer from './context/reducer';

import App from './App';
import {userContext} from './context/userContext';

const initialState = {
  orders: {},
};

const RootApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{state: state, dispatch}}>
      <App />
    </userContext.Provider>
  );
};

export default RootApp;
