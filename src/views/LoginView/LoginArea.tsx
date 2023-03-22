import { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import InputBase from "../../components/InputBase";

export function LoginArea() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <KeyboardAvoidingView className="h-52 justify-between">
        <InputBase title="E-mail" setState={setEmail} state={email} />
        <InputBase
          title="Senha"
          setState={setPassword}
          state={password}
          isPassword={true}
        />
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#f4aecb"
          onPress={() => console.log(email, password)}
          className="h-14 rounded-lg bg-pink-600 justify-center items-center"
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
    </ScrollView>
  );
}
