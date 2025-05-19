import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '@/components/Footer';
import { MaterialIcons } from '@expo/vector-icons';

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        await AsyncStorage.removeItem("@user-token");
        router.push("/Login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Bem-vindo ao Dashboard!</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <MaterialIcons name="logout" size={20} color="#111914" />
                </TouchableOpacity>
            </View>
            <View>
                
            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  // Garante que a tela ocupe toda a altura
        backgroundColor: '#111914',
    },
    header: {
        flexDirection: 'row',  // Direção do header: horizontal
        alignItems: 'center',  // Alinha verticalmente
        justifyContent: 'space-between',  // Espaçamento entre os elementos
        paddingTop: 20,  // Espaço superior
        paddingHorizontal: 20,  // Espaço lateral
        paddingBottom: 10,  // Espaço inferior
        backgroundColor: '#f7f7f7',  // Cor de fundo do header
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#111914',
    },
    logoutButton: {
        backgroundColor: '#22b85d',
        padding: 15,
        borderRadius: 8
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});