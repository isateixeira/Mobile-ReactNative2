import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput,Pressable,Image} from 'react-native';

  
  export default function App() {
     
  
   

    const gasAlcool =() =>{
      if(resultado < 0.7){
        setRes('Gasolina')

      } else{
        setRes('Alcool')
      }
    } 
    const dividir = () => {
      setResultado(parseInt(valor1) - parseInt(valor2))
    }
    const [valor1,setValor1]= useState(0)
    const [valor2,setValor2]= useState(0)
    const [resultado,setResultado]= useState(0)
    const [res, setRes]=useState('')
    
  
    return(
    
      
      <View style={styles.area}>
        <Text style = {styles.texto}>Alcool ou Gasolina?</Text>        
        <Image
          source = {{ uri : 'http://www.87naweb.com/files/2018/12/gasolina-alcool.jpg'}}
          style = {{ width : 300, height: 200, margin: 60}}
          />
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

        

      <Pressable style={styles.botao, {backgroundColor:'pink'}} 
    onPress={() => {gasAlcool();dividir();} }>
      <Text style={styles.textoBotao}>Calcular</Text>
     <TextInput
      style={styles.input}
      placeholder="Resultado: "
      value={String(resultado)}
      onChangeText = {(texto)=> {resultado(texto)}}
      />
      </Pressable>
              {/* <Text style={styles.texto}> {resultado} </Text> */}
    <Text style={styles.texto}> {res} </Text>
    
    
      
     
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

  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 30,
    color: 'white'
  }
})
  

