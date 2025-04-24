import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const [ img, setImg] = useState(require('./src/biscoito.png'))

  return (
    <View style={styles.container}>

      <Image
        source={ img }
        style={styles.image}
      />

      <Text style={styles.luck}> Clique no botão abaixo e veja sua sorte do dia! </Text>
      
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
    textAlign: 'center',
    margin: 30,
    fontStyle: 'italic'
  }
});
