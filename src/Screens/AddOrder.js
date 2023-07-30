// Import necessary components and functions from libraries
import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';

// Import necessary context and action type
import {userContext} from '../context/userContext';
import {ADD_ORDER} from '../context/action.type';

const AddOrder = ({navigation}) => {
  // State variables to store the form input values
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [tableId, setTableId] = useState('');
  const [dishes, setDishes] = useState('');

  // Access the dispatch function from the userContext
  // 'dispatch' function is destructured from the context
  const {dispatch} = useContext(userContext);

  // Function to handle adding a new order
  const handleAddOrder = () => {
    if (!customerName || !phone || !tableId || !dishes) {
      alert('Please fill in all the fields');
      return;
    }

    // Create a new order object
    const newOrder = {
      id: uuid.v4(), // Generate a unique ID for the order using uuid
      customerName,
      phone,
      tableId: parseInt(tableId), // Convert the tableId to an integer
      dishes: dishes.split(',').map(item => item.trim()), // Split the dishes string into an array and remove any extra spaces
      completed: false, // Set 'completed' to false initially
    };

    // Dispatch an action to add the new order to the state
    dispatch({
      type: ADD_ORDER,
      payload: {
        id: newOrder.id,
        newOrder,
      },
    });

    // Clear the form input fields after adding the order
    setCustomerName('');
    setPhone('');
    setTableId('');
    setDishes('');

    // Navigate back to the 'Orders' screen after adding the order
    navigation.navigate('Orders');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Add New Order</Text>

      {/* Input field for customer name */}
      <Text style={styles.label}>Customer Name:</Text>
      <TextInput
        style={styles.input}
        value={customerName}
        onChangeText={text => setCustomerName(text)}
        placeholder="Enter customer name"
      />

      {/* Input field for phone number */}
      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={text => setPhone(text)}
        placeholder="Enter phone number"
      />

      {/* Input field for table ID */}
      <Text style={styles.label}>Table ID:</Text>
      <TextInput
        style={styles.input}
        value={tableId}
        onChangeText={text => setTableId(text)}
        placeholder="Enter table ID"
        keyboardType="numeric"
      />

      {/* Input field for dishes (comma-separated) */}
      <Text style={styles.label}>Dishes (comma-separated):</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={dishes}
        onChangeText={text => setDishes(text)}
        placeholder="Enter dishes (comma-separated)"
        multiline
      />

      <Button title="Add Order" onPress={handleAddOrder} color="#1C8D73" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#242B2E',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#242B2E',
  },
  input: {
    borderWidth: 1,
    borderColor: '#C5C5C5',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#242B2E',
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default AddOrder;
