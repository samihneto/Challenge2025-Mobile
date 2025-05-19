import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Dashboard({ onLogout }: any) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('@user');
    onLogout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bem-vindo ao Dashboard!</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={20} color="#111914" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.dashboardContainer}>
        <View style={styles.dashboardHeader}>
          <Text style={styles.dashboardTitle}>Gestão da Garagem</Text>
          <Text style={styles.dashboardSubtitle}>Resumo das operações</Text>
        </View>

        <View style={styles.card}>
          <FontAwesome5 name="car" size={24} color="#22b85d" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Veículos cadastrados</Text>
            <Text style={styles.cardValue}>32</Text>
          </View>
        </View>

        <View style={styles.card}>
          <FontAwesome5 name="parking" size={24} color="#22b85d" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Vagas disponíveis</Text>
            <Text style={styles.cardValue}>8 de 40</Text>
          </View>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="access-time" size={24} color="#22b85d" />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Última movimentação</Text>
            <Text style={styles.cardValue}>Saída às 14:32</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Cadastrar novo veículo</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111914',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#f7f7f7',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111914',
  },
  logoutButton: {
    backgroundColor: '#22b85d',
    padding: 15,
    borderRadius: 8,
  },
  dashboardContainer: {
    padding: 20,
  },
  dashboardHeader: {
    marginBottom: 20,
  },
  dashboardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  dashboardSubtitle: {
    fontSize: 16,
    color: '#aaa',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1f24',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
  },
  cardInfo: {
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    color: '#ccc',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  actionButton: {
    marginTop: 20,
    backgroundColor: '#22b85d',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: '#111914',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
