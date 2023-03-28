import "./src/api/server";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginView from "./src/views/LoginView";
import TrackerView from "./src/views/TrackerView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Tracker" component={TrackerView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
