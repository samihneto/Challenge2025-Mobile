import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Forgot() {
  const navigation = useNavigation<any>(); // Tipagem pode variar

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a Senha?</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>RECUPERAR SENHA</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já lembra da senha?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
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
});
