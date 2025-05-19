import { Stack } from "expo-router";

export default function AuthenticatedLayout() {
    return(
        <Stack>
            <Stack.Screen name="Dashboard/index" options={{ headerShown: false }} />
            <Stack.Screen name="Profile/index" options={{ headerShown: false }} />
        </Stack>
    )
}