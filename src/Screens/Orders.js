import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {userContext} from '../context/userContext';
import OrderCard from '../Components/OrderCard';
const Orders = ({navigation}) => {
  const {state} = useContext(userContext);

  return (
    <View style={styles.conatainer}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={Object.values(state.orders)}
          renderItem={({item}) => <OrderCard order={item} key={item.id} />}
        />
      </View>

      <Button
        onPress={() => {
          navigation.navigate('AddOrder');
        }}
        title="Add Order"
        color="#841584"
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
  },
  flatListContainer: {
    flex: 1,
    marginBottom: 12,
  },
});
