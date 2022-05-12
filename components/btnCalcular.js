import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native'


export default props => {

  const { style, ...rest} = props;
  
  return(
    <TouchableOpacity style={[Estilo.btn, style]} {...rest}>

      <Text style={Estilo.text}>
        {props.title}
      </Text>

    </TouchableOpacity>
  );
}


const Estilo = StyleSheet.create({
  btn:{
    width:'60%',
    height: 40,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:5
  },
  text:{
    color:'#FFF'
  },
});