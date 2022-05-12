import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';


export default props => {

  const { style, ...rest} = props;

  return (
    <View style={Estilo.itemForm}>
      <Text style={Estilo.textInput}>{props.title}</Text>
      <TextInput 
        style={ [Estilo.input, style] }
        { ...rest }
      />
    </View>
  );
}


const Estilo = StyleSheet.create({
  input:{
    height: 40,
    width: '70%',
    borderRadius: 2,
    borderWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 10,
    alignSelf:'center'
  },
  itemForm:{
    width:'100vw',
  },
  textInput:{
    marginHorizontal:20,
    textTransform:'uppercase'
  }
});