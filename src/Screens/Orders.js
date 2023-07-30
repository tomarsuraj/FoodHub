// Import necessary components and functions from libraries
import React, {useContext} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';

// Import necessary context and action type
import {userContext} from '../context/userContext';
import OrderCard from '../Components/OrderCard';

const Orders = ({navigation}) => {
  // Retrieve the state from the userContext using the useContext hook
  // 'state' is destructured from the context
  const {state} = useContext(userContext);

  // Function to handle navigation to the AddOrder screen
  const handleNaviationAddOrder = () => navigation.navigate('AddOrder');

  return (
    <View style={styles.conatainer}>
      <Text style={styles.title}>Orders List</Text>

      <View style={styles.flatListContainer}>
        {/* FlatList to display the list of orders */}
        <FlatList
          data={Object.values(state.orders)}
          renderItem={val => {
            return (
              <OrderCard order={val.item} key={val.item.id} index={val.index} />
            );
          }}
        />
      </View>

      {/* Add Order button */}
      <Button
        onPress={handleNaviationAddOrder}
        title="Add Order"
        color="#1C8D73"
        accessibilityLabel="Add new order"
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  conatainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flatListContainer: {
    flex: 1,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginTop: 12,
    color: '#242B2E',
    textAlign: 'center',
  },
});
