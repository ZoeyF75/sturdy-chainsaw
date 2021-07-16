import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';


const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      text: 'Milk',
    },
    {
      id: uuid(),
      text: 'Eggs',
    },
    {
      id: uuid(),
      text: 'Bread',
    },
    {
      id: uuid(),
      text: 'Juice',
    },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={items}  
        renderItem={({item})=> <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 60
}
});

export default App;
