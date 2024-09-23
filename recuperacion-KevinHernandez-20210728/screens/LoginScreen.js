import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { loginUser } from './AuthService';  // Importar la función de login

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const user = await loginUser(email, password);
      console.log('Usuario inició sesión:', user);
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
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
