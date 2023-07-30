import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Switch} from 'react-native';
import {userContext} from '../context/userContext';
import {ORDER_COMPLETE, REMOVE_ORDER} from '../context/action.type';

const OrderCard = ({order}) => {
  const {dispatch} = useContext(userContext);
  const {customerName, phone, tableId, dishes, completed, id} = order;

  return (
    <View style={[styles.container, completed && styles.completedOrder]}>
      <Text style={styles.customerName}>{customerName}</Text>
      <Text style={styles.details}>{phone}</Text>
      <Text style={styles.details}>Table {tableId}</Text>
      <View style={styles.orderItemContainer}>
        <Text style={styles.orderItemTitle}>Order Item: </Text>
        <Text style={styles.dishes}>{dishes.join(', ')}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Mark as Completed</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={completed ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => dispatch({type: ORDER_COMPLETE, payload: id})}
            value={completed}
          />
        </View>

        {!completed && (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => dispatch({type: REMOVE_ORDER, payload: id})}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  completedOrder: {
    backgroundColor: '#e0e0e0',
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  orderItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  orderItemTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  dishes: {
    fontSize: 16,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  switchText: {
    fontSize: 16,
    fontWeight: '700',
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    flex: 1,
  },
  deleteText: {
    textAlign: 'center',
    color: '#fff',
  },
});
