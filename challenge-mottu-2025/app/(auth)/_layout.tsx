import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="Welcome/index" options={{ title: 'Bem-vindo' }} />
      <Stack.Screen name="Login/index" options={{ title: 'Login' }} />
      <Stack.Screen name="Register/index" options={{ title: 'Cadastro' }} />
      <Stack.Screen name="Forgot/index" options={{ title: 'Esqueceu a senha' }} />
    </Stack>
  );
}