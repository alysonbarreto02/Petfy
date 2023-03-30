import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";

import InputBase from "../../../components/InputBase";

type UserProps = { id: string; email: string; password: string };

export function LoginArea({ navigation }: { navigation: NavigationStackProp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableLogin, setenableLogin] = useState(false);

  const verifyUsers = async () => {
    let data: UserProps[] = [];
    await fetch("/api/users")
      .then((res) => res.json())
      .then((res) => (data = res))
      .catch((error) => {
        console.error(error);
      });
    //para saber um usuário para poder fazer login
    console.log(data[0]);
    if (
      data.filter((user) => user.email === email).length > 0 &&
      data.filter((user) => user.password === password).length > 0
    ) {
      navigation.navigate("Tracker");
      return true;
    }
    return false;
  };

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="h-52 justify-between"
      >
        <InputBase title="E-mail" setState={setEmail} />
        <InputBase title="Senha" setState={setPassword} isPassword={true} />
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#f4aecb"
          onPress={async () => setenableLogin(await verifyUsers())}
          className={`h-14 rounded-lg ${
            enableLogin ? "bg-green-500" : "bg-pink-600"
          } justify-center items-center`}
        >
          <Text className="text-white text-base">Entrar</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
      <View className="justify-center flex flex-row space-x-1 mt-8">
        <Text>Não possui conta?</Text>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#FAFAFA"
          onPress={() => {}}
        >
          <Text className="text-pink-600">Cadastre-se</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
