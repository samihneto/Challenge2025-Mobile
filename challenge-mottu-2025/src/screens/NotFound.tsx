import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function NotFound({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Oops! Página não encontrada.</Text>
            <Button title="Voltar para Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    }
});
