import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "../Screens/Product";
import Cart from "../Screens/Cart";

const Stack = createNativeStackNavigator()

function Mystack() {
  return (
    <View>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Products} initialRouteName="Home" />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
      
      </View>

  );
}

export default Mystack;