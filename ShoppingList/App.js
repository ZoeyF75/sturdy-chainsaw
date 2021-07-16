import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { v4 as uuid } from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';

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
        renderItem={({item})=> <ListItem item={item} />}
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
