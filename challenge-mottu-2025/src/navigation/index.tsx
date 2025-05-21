import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../../hooks/useAuth";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function Routes() {
    const { isLoggeded } = useAuth();

    return (
        <NavigationContainer>
            {isLoggeded ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}