import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Details from './Details';

const Cart=({cartitems, onPress, addQty, quantityDec})=> {

const [count, setCount]=useState(0)
const [id, setId]= useState()

// const quantityAdd=( value, value2 )=>{
//     setId(value)
//     if (value2 === 'increment') {
//         setCount((prevState) => id && prevState + 1);
        
//       }
//       else{
//         setCount((prevState) => prevState - 1);
//       }
//     }    
    


    return (
    
        <View style={styles.container}>
            
         <Text style={styles.Header}>My Cart</Text> 
          {console.log({cartitems})}
           
           {
           cartitems.map((item, index)=>{ 
            return (
            <View style={styles.containerCart}>
           <View style={styles.cartDiv}><Text style={styles.cartText} key={index}>
            Name: {item.product_name} 
            Price: {item.Product_price}
            {/* Product_Id: {item.id}  */}
            </Text>

            {/* <TouchableOpacity>Product Details</TouchableOpacity> */}
           {/* <Details details={item.description}/> */}
           

          <TouchableOpacity  key={index} onPress={()=>addQty(index)} style={styles.quantityPlus}>+</TouchableOpacity> 
         <Text style={styles.num}>{item.qty}</Text>

          <TouchableOpacity  key={index} onPress={()=>quantityDec(index)} style={styles.quantityPlus}>-</TouchableOpacity>

          <TouchableOpacity key={index} onPress={()=>onPress(item.id)} style={styles.num}>Clear</TouchableOpacity>
           </View>
           </View> )})
           }
        </View>
    );
}

 const styles = StyleSheet.create({
    container: {
        backgroundColor:"white",
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth:'100%',
        flexWrap:"wrap",
     },
    containerCart:{
      backgroundColor:"lightgrey",
      maxWidth:'100%',
      marginVertical:10,
      padding:25,
      borderRadius:10,
    },
    cartDiv:{
        flex:1,
        justifyContent:"space-between",
        flexDirection:"row",
        flexWrap:"wrap",
        borderRadius:20,
        alignItems: 'center',
        
    },
        Header:{
            alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
    
    },
    cartText:{
        textAlign:"left"
        

    },
    quantityPlus:{
        flexWrap:"wrap",
        paddingLeft:10,
        color:"blue",
        padding:5,
        backgroundColor:"white",
        paddingLeft:5,
        marginLeft:10,
        borderRadius:5,


    },
    num:{
    paddingLeft:6,
    backgroundColor:"white",
     borderRadius:5,
    margin:3,
    },

});

export default Cart;