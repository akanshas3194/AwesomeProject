import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import Cart from './Cart';

 function Products( ) {
  const [loading, setLoding] = useState(true);
    const [data, setData] = useState([]);
    const [cartitems, setCartItems] = useState([]);
    

    useEffect(()=> {
    fetch("https://62e8c790249bb1284eb3a622.mockapi.io/products")
    .then(response=>response.json())
    .then((json)=>{
      setData(json);
      setLoding(false);
    })
    .catch ((error)=>console.log(error))},[])

    const clickHandler =(data) =>{
        setCartItems([...cartitems, {...data, qty:1}]);
       
        //complete data
     }
     
     //delete the data
     const removeItem=(id)=>{
      
      let a = cartitems.filter((items)=> items.id!==id)
      setCartItems(a)
        
          //Need to ask where rep the data
          // cartitems.splice(index, 1);
          };

               //increase the quantity
          const  quantityAdd=(id)=>{
          cartitems[id].qty = cartitems[id].qty + 1;
          setCartItems([...cartitems])
          return console.log(cartitems[id].qty)
          }
            //decrease the quantity
            const  quantitySub=(id)=>{
            cartitems[id].qty = cartitems[id].qty - 1;
            setCartItems([...cartitems])
            return console.log(cartitems[id].qty)
            }

    const renderItem = ({ item }) => 
    {
      return(
        <View style={styles.containerList}>
        <Text>{item.product_name}</Text>
        <Text>Rs.{item.Product_price}</Text>
        <Image source={item.image} style={{height:50, width:150, resizeMode:"cover"}}/>
        <Text>{item.description}</Text>
       <View style={styles.containerButton}>
       <Button style={styles.buttonCart} title='Cart' onPress={()=>clickHandler(item)}/></View>
        </View>
      )
    };
      

  return (
    <View style={styles.container}>
      <Text style={{paddingRight:350, paddingTop:10}}>Products List</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('cart')} style={styles.cart}>Cart</TouchableOpacity>

{/* {data.map(renderItem)} */}
      <FlatList data={data} renderItem={renderItem} numColumns={2}/>

   
      <Cart cartitems={cartitems} onPress={(id)=>removeItem(id)} addQty={(id)=>quantityAdd(id)} quantityDec={(id)=>quantitySub(id)}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerList:{
    height:230,
    width:200,
    backgroundColor:"lightblue",
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
    padding:12,
  },
  buttonCart:{
    height:2,
    width:5,
 
  },
  containerButton:{
    flex: 1,
    backgroundColor: 'lightblue',

  },
  cart:{
    paddingLeft:400,

  },
  
});

export default Products;