import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


 function Details({props}) {
  return (
    
      <View style={styles.container}>
      <Text>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Details;