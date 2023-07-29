import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddOrder = ({onAddOrder}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [tableId, setTableId] = useState('');
  const [dishes, setDishes] = useState('');

  const handleAddOrder = () => {
    if (!customerName || !phone || !tableId || !dishes) {
      alert('Please fill in all the fields');
      return;
    }

    const newOrder = {
      id: Math.random().toString(), // This is not ideal for generating IDs, but it works for this example
      customerName,
      phone,
      tableId: parseInt(tableId),
      dishes: dishes.split(',').map(item => item.trim()),
      completed: false,
    };

    onAddOrder(newOrder);
    setCustomerName('');
    setPhone('');
    setTableId('');
    setDishes('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Add New Order</Text>

      <Text style={styles.label}>Customer Name:</Text>
      <TextInput
        style={styles.input}
        value={customerName}
        onChangeText={text => setCustomerName(text)}
        placeholder="Enter customer name"
      />

      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={text => setPhone(text)}
        placeholder="Enter phone number"
      />

      <Text style={styles.label}>Table ID:</Text>
      <TextInput
        style={styles.input}
        value={tableId}
        onChangeText={text => setTableId(text)}
        placeholder="Enter table ID"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Dishes (comma-separated):</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={dishes}
        onChangeText={text => setDishes(text)}
        placeholder="Enter dishes (comma-separated)"
        multiline
      />

      <Button title="Add Order" onPress={handleAddOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default AddOrder;