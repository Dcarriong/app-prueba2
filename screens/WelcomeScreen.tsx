import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import LoginScreen from './LoginScreen'; // Asegúrate de que está correctamente importado
import RegistroScreen from './RegistroScreen'; // Crea e importa tu pantalla de registro

export default function WelcomeScreen() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'login' | 'registro'>('welcome');

  if (currentScreen === 'login') {
    return <LoginScreen />;
  }

  if (currentScreen === 'registro') {
    return <RegistroScreen />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://png.pngtree.com/element_our/png_detail/20181205/bankpaymentsbankingfinancialmoney-line-icon--vector-isol-png_258060.jpg',
        }}
        style={styles.imagen}
      />
      <Text style={styles.titulo}>Bienvenido</Text>
      <Button title="Login" onPress={() => setCurrentScreen('login')} />
      <Button title="Registro" onPress={() => setCurrentScreen('registro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});