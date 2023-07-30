import React from 'react';

import Orders from './Screens/Orders';
import AddOrder from './Screens/AddOrder';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="AddOrder" component={AddOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
