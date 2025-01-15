import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/config';


export default function RegistroScreen() {

  const [correo, setcorreo] = useState('')
      const [contrasenia, setcontrasenia] = useState('')
      const [usuario, setusuario] = useState('')
      const [celular, setcelular] = useState('')

      function registro() {
        createUserWithEmailAndPassword(auth, correo, contrasenia)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      }

      
  return (
    
    <View style={styles.container}>
    <Text style={styles.title}>Crea tu cuenta</Text>
    <TextInput
      placeholder="Ingresa tu correo"
      style={styles.input}
      onChangeText={(texto) => setcorreo(texto)}
      keyboardType="email-address"
    />
    <TextInput
      placeholder="Ingresa tu contraseña"
      style={styles.input}
      onChangeText={(texto) => setcontrasenia(texto)}
      secureTextEntry
    />
    <TextInput
      placeholder="Ingresa tu usuario"
      style={styles.input}
      onChangeText={(texto) => setusuario(texto)}
      
    />
    <TextInput
      placeholder="Ingresa tu numero de celular"
      style={styles.input}
      onChangeText={(texto) => setcelular(texto)}
      
    />
    <TouchableOpacity style={styles.button} onPress={registro}>
      <Text style={styles.buttonText}>Registrarme</Text>
    </TouchableOpacity>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#f5f5f5',
},
title: {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#333',
},
input: {
  fontSize: 16,
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 15,
  marginVertical: 10,
  width: '90%',
  color: '#333',
},
button: {
  backgroundColor: '#007BFF',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 20,
  width: '90%',
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
});