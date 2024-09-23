import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { addUser, getUsers } from './FirestoreService';  // Importar las funciones

const UserScreen = () => {
  // Función para manejar el registro de un nuevo usuario
  const handleAddUser = async () => {
    await addUser('Kevin', 'kevin@correo.com');  // Agregar un usuario
  };

  // Función para manejar la obtención de usuarios
  const handleGetUsers = async () => {
    const users = await getUsers();  // Obtener usuarios
    console.log(users);
  };

  return (
    <View>
      <Button title="Agregar Usuario" onPress={handleAddUser} />
      <Button title="Obtener Usuarios" onPress={handleGetUsers} />
    </View>
  );
};

export default UserScreen;
