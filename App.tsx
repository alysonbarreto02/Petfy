import LoginView from "./src/views/LoginView";
import { NavigationContainer } from "@react-navigation/native";
import "./src/api/server";

export default function App() {
  return (
    <NavigationContainer>
      <LoginView />
    </NavigationContainer>
  );
}
