import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'hooks/useAuth';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function Login() {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {login} = useAuth();

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }
    login(email, senha);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entre no Mottu Gestor</Text>

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#ccc"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('Forgot')}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={styles.link}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111914',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#f7f7f7',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1d2a23',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#22b85d',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    color: '#ccc',
    fontSize: 14,
  },
  link: {
    color: '#22b85d',
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#22b85d',
    marginTop: 10,
    textDecorationLine: 'underline',
  }
});
