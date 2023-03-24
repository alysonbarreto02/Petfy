import LoginView from "./src/views/LoginView";
import TrackerView from "./src/views/TrackerView";
import { NavigationContainer } from "@react-navigation/native";
import "./src/api/server";
import { View, Image } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginView /> */}
      <TrackerView />
    </NavigationContainer>
  );
}
