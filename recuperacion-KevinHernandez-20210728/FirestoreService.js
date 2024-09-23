import { db } from './firebase';  // Importar Firestore desde firebase.js
import { collection, addDoc, getDocs } from 'firebase/firestore';

// Función para agregar un nuevo usuario
export const addUser = async (name, email) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: name,
      email: email
    });
    console.log('Usuario agregado con ID:', docRef.id);
  } catch (error) {
    console.error('Error al agregar usuario:', error);
  }
};

// Función para obtener usuarios
export const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });  // Guardar el ID del documento junto con los datos
    });
    console.log('Usuarios:', users);
    return users;  // Retornar los usuarios si es necesario
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
};
