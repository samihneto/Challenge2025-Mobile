
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { Alert } from "react-native";

interface IAuthContextProps {
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    user: {};
    isLoggeded: boolean;
}

interface IAuthContextProviderProps {
    children: ReactNode
}

const AuthContext = createContext({} as IAuthContextProps);

function AuthContextProvider({ children }: IAuthContextProviderProps) {
    const [user, setUser] = useState({});
    const [isLoggeded, setIsLoggeded] = useState(false);

    async function login(email: string, password: string) {
        try {
            const contasSalvas = await AsyncStorage.getItem('@contas');
            const contas = contasSalvas ? JSON.parse(contasSalvas) : [];
            console.log(contas);

            if (contasSalvas === null || contasSalvas === undefined) {
                throw new Error("Conta não cadastrada")
            }

            const contaEncontrada = contas.find(
                (conta: any) => conta.email === email && conta.senha === password
            );

            if (!contaEncontrada) {
                throw new Error("E-mail ou senha inválidos")

            }

            await AsyncStorage.setItem('@user', JSON.stringify(contaEncontrada));
            Alert.alert('Sucesso', 'Login realizado!');
            //onLogin(); // <- chama o RootNavigator para ir para o AppStack

            setIsLoggeded(true);
            setUser({})

        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Alert.alert('Erro', error);
            throw new Error(" E-mail ou senha inválidos ")
        }
    }
    async function logout() {
        setIsLoggeded(false);
        setUser({})
    }


    return (
        <AuthContext.Provider value={{ isLoggeded, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Voce precisa usar o Auth PRovider em volta da aplicacao")
    }
    return context;
}

export {
    AuthContextProvider,
    useAuth
};

