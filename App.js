import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Products from "./Screens/Product";
import Cart from "./Screens/Cart";
import { NavigationContainer } from '@react-navigation/native';
import Mystack from './Navigation/index';
import Context from './Screens/Context';
import Other from './Screens/Other';

 function App() {
  return (
    // <NavigationContainer>
      <View style={styles.container}>
      <Text>Welcome to Ecomm</Text>
       {/* <Mystack/> */}
     <Products/> 
  <Context/>
      </View>
     /* </NavigationContainer> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50,
  },
});

export default App;