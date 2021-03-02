import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {v4 as uuid} from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem.js';
import AddItem from './components/AddItem.js';


const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Deep Learning'},
    {id: uuid(), text: 'AWS'},
    {id: uuid(), text: 'PCB odering'},
    {id: uuid(), text: 'ESP32 IDF'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
      //Stating error when there is no task entered
        'No item', 'Please enter an item', 
        [{text: 'Yes sir', style: 'cancel', },],
         {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid(),text}, ...prevItems];  
        //prevItems: leaving the previous Items after the new one
      });
    }
  };

  return (
    <View style={styles.container}> 
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => (
        <ListItem item = {item} deleteItem={deleteItem}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
