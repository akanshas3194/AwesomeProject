import React, { createContext, useState }  from 'react';
import { View } from 'react-native';
import NewContext from './NewContext';

export const MyContext = createContext();

function Context(){
    
const data ="hello"

    return(

<View>
    <MyContext.Provider value={data}>
   {data} This is My first Context API

   <NewContext/>
    </MyContext.Provider>
</View>

    );
}

export default Context;