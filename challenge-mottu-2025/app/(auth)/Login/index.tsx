import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        if (!email || !senha) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }

        try {
            const contasSalvas = await AsyncStorage.getItem('@contas');
            const contas = contasSalvas ? JSON.parse(contasSalvas) : [];

            const contaEncontrada = contas.find(
                (conta: any) => conta.email === email && conta.senha === senha
            );

            if (!contaEncontrada) {
                Alert.alert('Erro', 'E-mail ou senha inválidos');
                return;
            }

            await AsyncStorage.setItem('@user', JSON.stringify(contaEncontrada));
            Alert.alert('Sucesso', 'Login realizado!');
            router.push('/Dashboard');

        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro', 'Não foi possível fazer login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

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

            <TouchableOpacity onPress={() => router.push('./Forgot')}>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Não tem uma conta?</Text>
                <TouchableOpacity onPress={() => router.push('./Register')}>
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
