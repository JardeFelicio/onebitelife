import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/start";

const Stack = createStackNavigator();

export default function Allpages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
            >
            <Stack.Screen name="Start" component={Start}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}