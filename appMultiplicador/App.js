import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput,Pressable} from 'react-native';

  
  export default function App() {
    
  
    const [valor1,setValor1]= useState(0)
    const [valor2,setValor2]= useState(0)
    const [resultado,setResultado]= useState(0)

    const multiplicacao=() =>{
setResultado(valor1*valor2)

    }

    return(
      
      <View style={styles.area}>
        <Text style = {styles.texto}>Multiplicador de números</Text>        
      <TextInput
      style={styles.input}
      placeholder="Digite seu 1 número?"
      value={String(valor1)}
      onChangeText = {(texto)=> {setValor1(texto)}}
      />
      <TextInput
      style={styles.input}
      placeholder="Digite seu 2 número?"
      value={String(valor2)}
      onChangeText = {(texto)=> {setValor2(texto)}}
      />
      <Pressable onPress = {() => multiplicacao()}>
        <Text style = { styles.botao}> 
          Calcular </Text>
        </Pressable>
      <TextInput
      style={styles.input}
      placeholder="Resultado: "
      value={String(resultado)}
      onChangeText = {(texto)=> {resultado(texto)}}
      /> 
     
      </View>

    );
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    backgroundColor:'#D1F4FF',
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    backgroundColor: 'seashell',
    fontSize: 25,
    margin:20,
    fontStyle: 'italic'
  },
  botao:{
    textAlign: 'center',
    backgroundColor: '#D1F4F6',
    fontSize: 25,
    fontStyle: 'italic',
    margin:20,
    borderRadius: 4, 
    padding: 6, 
    height: 50, 
    width: '90%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 4, 

  }
})

