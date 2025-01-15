import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ref, set } from 'firebase/database'
import { db } from '../config/config'

export default function OperacionesScreen() {

  const [idOperacion, setidOperacion] = useState('')
  const [precio, setprecio] = useState(0)
  const [cantidad, setcantidad] = useState(0)
  const [descripcion, setdescripcion] = useState('')

  function guardar() {

    set(ref(db, 'usuarios/' + idOperacion), {
      precio: precio,
      cantidad: cantidad,
      descripcion : descripcion
    });
    limpiar()
  }

  function limpiar(){
    
    setidOperacion('')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>MENU DE OPERACIONES</Text>
      <Text style={styles.inputT}>Ingresar ID</Text>
      <TextInput
        placeholder='Ingresar id'
        style = {styles.input}
        onChangeText={(texto) => setidOperacion(texto)}
      />

<Text style={styles.inputT}>Ingresar Precio</Text>
    <TextInput
        placeholder='Ingresar precio'
        style = {styles.input}
        onChangeText={(texto) => setprecio(+texto)}
        value={precio.toString()}
    />
<Text style={styles.inputT}>Ingresar cantidad</Text>
    <TextInput
        placeholder='Ingresar cantidad'
        style = {styles.input}
        onChangeText={(texto) => setcantidad(+texto)}
        value={cantidad.toString()}
    />
<Text style={styles.inputT}>Ingresar descripcion</Text>
    <TextInput
        placeholder='Ingresar descripcion'
        style = {styles.input}
        onChangeText={(texto) => setdescripcion(texto)}
    />

    <Button title='Guardar' onPress={()=> guardar()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    height: 50,
    width: '100%',
    fontSize: 18,
    backgroundColor: '#f7f7f7',
    borderColor: '#4a90e2',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: '#333',
},
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f3f4f6',
  padding: 20,
},
texto: {
  fontSize: 24,
  fontWeight: '600',
  color: '#333',
  marginBottom: 15,
},
inputT: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 5, 
},
})