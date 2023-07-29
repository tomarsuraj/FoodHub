/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import OrderCard from './src/Components/OrderCard';
import AddOrder from './src/Screens/AddOrder';

function App() {
  return (
    <SafeAreaView>
      <AddOrder />
    </SafeAreaView>
  );
}

export default App;
