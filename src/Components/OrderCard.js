// Import necessary components and functions from libraries
import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Import necessary context and action type
import {userContext} from '../context/userContext';
import {ORDER_COMPLETE_STATUS, REMOVE_ORDER} from '../context/action.type';

const OrderCard = ({order, index}) => {
  // Access the userContext using the useContext hook
  // 'dispatch' function is destructured from the context
  const {dispatch} = useContext(userContext);

  // Destructure the order object to extract the necessary data
  const {customerName, phone, tableId, dishes, completed, id} = order;

  // Function to handle deleting an order
  const handleDeleteOrder = () => {
    dispatch({type: REMOVE_ORDER, payload: id});
  };

  // Function to handle marking an order as completed
  const handleOrderComplete = isChecked => {
    dispatch({
      type: ORDER_COMPLETE_STATUS,
      payload: {id, value: isChecked},
    });
  };

  return (
    <View style={[styles.container, completed && styles.completedOrder]}>
      {/* Customer Details */}
      <View style={styles.customerDetailsContainer}>
        <View style={styles.customerNameContainer}>
          {/* Display order index and customer name */}
          <Text style={[styles.customerName, styles.index]}># {index + 1}</Text>
          <Text style={styles.customerName}> {customerName}</Text>
        </View>
        <View>
          {/* Display table ID and phone number */}
          <Text style={styles.tableId}>Table Id:{tableId}</Text>
          <Text style={styles.phoneNo}>Phone No: {phone}</Text>
        </View>
      </View>

      {/* Orders */}
      <View style={styles.ordersContainer}>
        <Text style={styles.orderTitle}>Orders: </Text>
        <Text style={styles.orders}>{dishes.join(', ')}</Text>
      </View>

      {/* Actions */}
      <View style={styles.actionContainer}>
        <View style={styles.checkBoxContainer}>
          <BouncyCheckbox
            value={false}
            disableText={false}
            onPress={handleOrderComplete}
            isChecked={completed}
          />
          <Text
            style={[
              styles.checkBoxText,
              completed && styles.checkBoxTextCompleted,
            ]}>
            {completed ? 'Completed' : 'Mark as completed'}
          </Text>
        </View>

        {/* Delete button (visible only if the order is not completed) */}
        {!completed && (
          <Button
            title="Delete"
            color="#B4161B"
            accessibilityLabel="Delete Order"
            style={styles.deleteButton}
            onPress={handleDeleteOrder}
          />
        )}
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  // Styles for the order card container
  container: {
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#C5C5C5',
    borderRadius: 6,
  },
  completedOrder: {
    backgroundColor: '#edf2f7',
    borderWidth: 1,
    borderColor: '#4DD637',
  },

  // Styles for customer details section
  customerDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
  },
  customerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  index: {
    color: '#818181',
  },
  customerName: {
    color: '#3944F7',
    fontSize: 16,
    fontWeight: '700',
  },
  tableId: {
    color: '#242B2E',
    fontSize: 12,
    fontWeight: '700',
  },
  phoneNo: {
    color: '#242B2E',
    fontSize: 12,
    fontWeight: '400',
  },

  // Styles for orders section
  ordersContainer: {
    flexDirection: 'row',
    minHeight: 60,
    height: 'auto',
    width: '100%',
    marginHorizontal: 12,
  },
  orderTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#242B2E',
  },
  orders: {
    fontSize: 14,
    fontWeight: '400',
    color: '#242B2E',
    flex: 1,
  },

  // Styles for action section
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C5C5C5',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#B4161B',
  },
  checkBoxTextCompleted: {
    color: '#1C8D73',
  },
  deleteButton: {
    fontFamily: 20,
  },
});
