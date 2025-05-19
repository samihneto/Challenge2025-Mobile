import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo a MottuGestor</Text>
            <Text style={styles.subtitle}>Facilitando a gestão dos pátios da Mottu</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText} onPress={() => router.push("./Login")}>ENTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText} onPress={() => router.push("./Register")}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
        backgroundColor: '#111914',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#f7f7f7',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: '#f7f7f7',
    },
    buttonContainer: {
        marginTop: 20,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    loginButton: {
        backgroundColor: '#22b85d',
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 20,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
