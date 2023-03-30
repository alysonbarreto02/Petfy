import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
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
    <ScrollView className="bg-cyan-900 h-screen flex flex-col">
      <Logo />
      <View className="bg-white mt-20 h-96 rounded-t-3xl p-5">
        <LoginArea navigation={navigation} />
      </View>
    </ScrollView>
  );
}
