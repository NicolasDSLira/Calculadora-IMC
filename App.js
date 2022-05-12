import React, {useState} from "react";
import { StyleSheet, View, Text  } from "react-native";


//componenets
import {Btn, Input} from './components'

var result = 0;

const Home = () => {

  const [altura, setAltura] = useState(Number);
  const [peso, setPeso] = useState(Number);
  const [result, setResult] = useState('');


  const  calcula = () => {

      //Verifica se existe valor
      if(altura === undefined) throw setResult('Prencha a Altura');
      if(peso === undefined) throw setResult('Prencha o Peso');

      //valida valor
      if(isNaN(altura)) throw setResult('Valor Invalido');
      if(isNaN(peso)) throw setResult('Valor Invalido');

      //tira 0 
      if(peso === 0 || altura === 0) throw setResult('0 não é um valor válido');

      return setResult("IMC - " + peso / (altura*altura));
}
  
  return(
    <View style={Estilo.container}>

      <View style={Estilo.formView}>

      <Text style={Estilo.titleForm}> Calcule seu Índice de Massa Corporal </Text>

        <Input 
          title = "Altura"
          placeholder="Altura"
          keyboardType='decimal-pad'
          style={Estilo.formItem}
          value={altura}
          onChangeText={ number => setAltura(number)}
        />

        <Input 
          title = "Peso"
          placeholder="Peso"
          keyboardType='decimal-pad'
          style={Estilo.formItem}
          value={peso}
          onChangeText={ number => setPeso(number)}
        />
        
        <Btn 
          title="Calcular IMC"
          style={Estilo.formItem}
          onPress={ calcula }
        />

      <Text style={Estilo.resultado}>
        {result}
      </Text>

      </View>

    </View>
  );
};

const Estilo = StyleSheet.create({
  container:{
    backgroundColor: '#CECECE',
    flexGrow: 1,
  },
  formView:{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formItem:{
    marginVertical:10,
  },
  titleForm:{
    marginVertical:20,
    textTransform:'uppercase',
    fontWeight:'bold'
  },
  resultado:{
    marginTop:40,
    fontSize:'14pt',
  }
});

export default Home;