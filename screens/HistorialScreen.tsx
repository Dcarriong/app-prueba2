import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getDatabase, ref, get } from 'firebase/database';

// Definir el tipo para las transacciones
interface Transaccion {
  id: string;
  precio: number;
  cantidad: number;
  descripcion: string;
}

export default function HistorialScreen() {
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);
  const db = getDatabase();

  useEffect(() => {
    const dbRef = ref(db, 'usuarios/');
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const transaccionesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));

        // Ordenar las transacciones por precio (ascendente)
        transaccionesArray.sort((a, b) => a.precio - b.precio); // Cambiar esta línea si necesitas un orden descendente

        setTransacciones(transaccionesArray);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Historial de Operaciones</Text>
      <FlatList
        data={transacciones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemTexto}>ID: {item.id}</Text>
            <Text style={styles.itemTexto}>Descripción: {item.descripcion}</Text>
            <Text style={styles.itemTexto}>Cantidad: {item.cantidad}</Text>
            <Text style={styles.itemTexto}>Precio: {item.precio}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    padding: 30,
  },
  texto: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  item: {
    padding: 15,
    backgroundColor: '#e6f570',
    borderRadius: 8,
    marginVertical: 5,
    width: '100%',
  },
  itemTexto: {
    color: '#0f1004',
    fontSize: 18,
  },
});
