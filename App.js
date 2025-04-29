import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [ img, setImg ] = useState(require('./src/biscoito.png'))
  const [ frase, setFrase] = useState('Clique e receba uma frase!')

  const frasesArray = [ 
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vai mais longe do que muito conhecimento.',
    'Quem quer colher rosas deve suportar os espinhos.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'Uma iniciativa mal-sucedida não significa o final de tudo. Sempre existe uma nova oportunidade.',
    'Aquele que se importa com o sentimento dos outros, não é um tolo.',
    'A adversidade é um espelho que reflete o verdadeiro eu.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'Uma bela flor é incompleta sem suas folhas.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.',
    'Não há melhor negócio que a vida. A gente há obtém a troco de nada.',
    'O riso é a menor distância entre duas pessoas.',
    'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
    'É mais fácil conseguir o perdão do que a permissão.'
    ]

  function quebrarBiscoito () {
    let random = Math.floor(Math.random() * frasesArray.length)

    setFrase( ' "' + frasesArray[random] + '" ' )
    setImg(require('./src/biscoitoAberto.png'))
    
  }

  function reiniciarBiscoito () {
    setFrase('Clique e receba uma frase!')
    setImg(require('./src/biscoito.png'))
  }

  return (
    <View style={styles.container}>

      <Image
        source={ img }
        style={styles.image}
      />

      <Text style={styles.luck}> {frase} </Text>

      <TouchableOpacity style={styles.button} onPress={ quebrarBiscoito }>
        <View style={styles.areaButton}>
          <Text style={styles.textButton}>Abrir biscoito!</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {marginTop: 15, borderColor: '#121212'}]} onPress={ reiniciarBiscoito }>
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
