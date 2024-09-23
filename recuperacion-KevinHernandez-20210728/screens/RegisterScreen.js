import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { registerUser } from './AuthService';  // Importar la función de registro

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const user = await registerUser(email, password);
      console.log('Usuario registrado:', user);
      // Navegar a la siguiente pantalla, etc.
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text>{error}</Text>}
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
