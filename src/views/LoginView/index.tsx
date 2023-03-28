import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import { useLayoutEffect } from "react";

import { LoginArea } from "./LoginArea";
import Logo from "./Logo";

export default function LoginView({
  navigation,
}: {
  navigation: NavigationStackProp;
}) {
  const Navigation = useNavigation();

  useLayoutEffect(() => {
    Navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-cyan-900">
      <Logo />
      <View className="bg-white h-full mt-7 rounded-t-3xl p-5">
        <LoginArea navigation={navigation} />
      </View>
    </View>
  );
}
