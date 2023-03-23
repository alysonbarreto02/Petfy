import { View } from "react-native";
import { LoginArea } from "./LoginArea";
import Logo from "./Logo";

export default function LoginView() {
  return (
    <View className="bg-cyan-900">
      <Logo />
      <View className="bg-white mt-7 rounded-t-3xl p-5">
        <LoginArea />
      </View>
    </View>
  );
}
