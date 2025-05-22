import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'hooks/useAuth';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function Profile() {
    const { logout } = useAuth();
    const { navigate } = useNavigation();
    const [usuario, setUsuario] = useState<{ email: string; apelido?: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [notificacoes, setNotificacoes] = useState(true);

    useEffect(() => {
        const carregarUsuario = async () => {
            try {
                const dadosSalvos = await AsyncStorage.getItem("@user-token");
                if (dadosSalvos) {
                    const usuario = JSON.parse(dadosSalvos);
                    setUsuario(usuario);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do usuário:", error);
            } finally {
                setLoading(false);
            }
        };

        carregarUsuario();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem("@user-token");
        logout();
    };

    const alternarNotificacoes = (valor: boolean) => setNotificacoes(valor);
    const excluirConta = () => console.log("Conta excluída");

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#22b85d" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerProfile}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {usuario?.email.charAt(0) || 'U'}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.editarFotoButton}>
                        <Text style={styles.editarFotoText}>Editar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoContainer}>
                    <Text>Informações Pessoais</Text>

                    <View style={styles.campoContainer}>
                        <Text style={styles.campoLabel}>Email</Text>
                        <Text style={styles.campoValor}>
                            {usuario?.email || 'email@exemplo.com'}
                        </Text>
                    </View>

                    <View style={styles.campoContainer}>
                        <Text style={styles.campoLabel}>Cliente desde</Text>
                        <Text style={styles.campoValor}></Text>
                    </View>
                </View>

                {/* Configurações */}
                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>Configurações</Text>

                    <View style={styles.opcaoContainer}>
                        <Text style={styles.opcaoLabel}>Notificações</Text>
                        <Switch
                            trackColor={{ false: '#e0e0e0', true: '#81b0ff' }}
                            thumbColor={notificacoes ? '#6a8fff' : '#f4f3f4'}
                            ios_backgroundColor="#e0e0e0"
                            onValueChange={alternarNotificacoes}
                            value={notificacoes}
                        />
                    </View>
                </View>

                {/* Links úteis */}
                <View style={styles.secao}>
                    <Text style={styles.secaoTitulo}>Ajuda e Suporte</Text>

                    {['Central de Ajuda', 'Termos de Uso', 'Política de Privacidade', 'Sobre o Aplicativo'].map((item) => (
                        <TouchableOpacity key={item} style={styles.linkContainer}>
                            <Text style={styles.linkLabel}>{item}</Text>
                            <Text style={styles.linkSeta}>→</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Botões de conta */}
                <View style={styles.secao}>
                    <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout}>
                        <MaterialIcons name="logout" size={20} color="#111914" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoExcluir} onPress={excluirConta}>
                        <MaterialIcons name="delete" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
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
        padding: 20,
    },
    infoContainer: {
        width: '70%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#111914',
    },
    containerProfile: {
        backgroundColor: '#f7f7f7',
        padding: 40,
        borderRadius: 15,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 8,
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 15,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#4a7df3',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    avatarText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    editarFotoButton: {
        backgroundColor: 'transparent',
    },
    editarFotoText: {
        color: '#5A45FE',
        fontSize: 14,
        fontWeight: '500',
    },
    campoContainer: {
        marginVertical: 8,
    },
    campoLabel: {
        fontSize: 14,
        color: '#555',
    },
    campoValor: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    secao: {
        marginTop: 20,
    },
    secaoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    opcaoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    opcaoLabel: {
        fontSize: 16,
    },
    ultimaOpcao: {
        marginBottom: 20,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    linkLabel: {
        fontSize: 16,
        color: '#5A45FE',
    },
    linkSeta: {
        fontSize: 16,
        color: '#5A45FE',
    },
    botaoLogout: {
        backgroundColor: '#22b85d',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: 90,
        alignItems: 'center',
        textAlign: 'center',
    },
    botaoExcluir: {
        backgroundColor: '#e83d3d',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: 90,
        alignItems: 'center',
        marginTop: 20,
    },
});
