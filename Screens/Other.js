import React, { useContext } from 'react';
import { View,Button, Text } from 'react-native';
import { MyContext } from './Context';

function Other(){
   const user =useContext(MyContext)

   const calculation=()=>{
        const numbersOne = [ ];
        const numbersTwo = {id:4, ido:5, ff:6};
        const numbersCombined = [{...numbersOne, ...numbersTwo}];
        console.log(numbersCombined)
        
    }


    return(
<View>
{user} <Text>here data is consumed</Text>
<Button onPress={calculation} title='click me'/>
</View>



    ) };

export default Other;