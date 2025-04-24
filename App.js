import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [ img, setImg] = useState(require('./src/biscoito.png'))

  return (
    <View style={styles.container}>

      <Image
        source={ img }
        style={styles.image}
      />

      <Text style={styles.luck}> Clique no botão abaixo e veja sua sorte do dia! </Text>

      <TouchableOpacity style={styles.button}>
        <View style={styles.areaButton}>
          <Text style={styles.textButton}>Abrir biscoito!</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: '#121212'}]}>
        <View style={styles.areaButton}>
          <Text style={[styles.textButton, {color:'#121212'}]}>Fechar Biscoito</Text>
        </View>
      </TouchableOpacity>
      
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
  image:{
    width: 230,
    height: 230
  },
  luck:{
    fontSize: 18,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button:{
    width: 230,
    height: 50, 
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 50
  },
  areaButton:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});
