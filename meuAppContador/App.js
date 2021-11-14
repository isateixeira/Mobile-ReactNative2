import React, {useState} from 'react';
import { StyleSheet, Text, View,Pressable} from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
    
      <Text style = {styles.text}> {counter}</Text> 
      <Pressable style={styles.botao}onPress={() => setCounter(counter + 1)}>
        <Text style={styles.textoBotao}> 
        +</Text>
        </Pressable>
        <Pressable style={styles.botao2}onPress={() => setCounter(counter - 1)}>
        <Text style={styles.textoBotao2}> 
          -</Text>
        </Pressable>
        
        
             </View>
  );
};

const App = () =>{
  return(
    <View style = {styles.container}>
      <Text style = {{textAlign: 'center', margin: 20, fontStyle: 'italic', fontSize: 40, }}>Contador de Pessoas</Text>
      <Counter value = {0}/>
      <Text style={styles.text}></Text>
      
    </View>

  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6D3EB',
  },
  text: {
    fontSize : 150,
    textAlign: 'left',
    margin: 120
  },
  textoBotao: {
      textAlign: 'center',
      textAlignVertical: 'center',
      height: 45,
      fontSize: 40
  },
  botao:{
    width: 80,
    height: 80,
    alignItems: 'center',
    backgroundColor: '#D1F4FF',
    alignSelf: "center",
     marginStart: 90,
     marginTop: 20
  },
  textoBotao2: {
    textAlign: 'center',
    height: 45,
    fontSize: 50
},
botao2:{
  width: 80,
    height: 80,
    alignItems: 'center',
    backgroundColor: '#D1F4FF',
    alignSelf: "center",
    }  
});

export default App;