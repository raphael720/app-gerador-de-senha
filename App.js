import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function app() {
  const [password, setPassoword] = useState('');
  const [size, setSize] = useState(10);

  function generatePass() {
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n))
    }

    setPassoword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!!')
  }

  return (
    <View style={styles.cointainer}>
      <Image
      source={require('./src/assets/logo.png')}
      style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={5} /* O valor minimo */
          maximumValue={15} /*O valor maximo */
          minimumTrackTintColor="#24D835"
          maximumTrackTintColor="#000"
          value={size}
          onValueChange={ (valor) => setSize (valor.toFixed(0)) }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePass}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
      <View style={styles.area}>
        <Text style={styles.paassword} onLongPress={copyPass}> {password} </Text>
      </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo:{
    marginBottom: 60
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#FFF',
    width: '80%',
    borderRadius: 7
  },
  button: {
    backgroundColor: '#FFa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  paassword: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20
  }
});
