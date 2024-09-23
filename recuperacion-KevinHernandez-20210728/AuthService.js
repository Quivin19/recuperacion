import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';  // Importar la instancia de auth desde firebase.js

// Función para registrar un nuevo usuario
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Usuario registrado:', user);
    return user;
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Usuario inició sesión:', user);
    return user;
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    throw error;
  }
};
