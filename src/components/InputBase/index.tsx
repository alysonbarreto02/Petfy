import { TextInput, View, Text } from "react-native";

export default function InputBase({
  title,
  setState,
  isPassword,
}: {
  title: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  isPassword?: boolean;
}) {
  return (
    <View className="h-16 rounded-md px-3 pt-2.5 pb-1.5 shadow-sm border border-cyan-900">
      <Text className="text-xs font-medium text-gray-900">{title}</Text>
      <TextInput
        testID="Input"
        className="text-gray-900 placeholder:text-gray-400 "
        placeholder={title}
        secureTextEntry={isPassword}
        onChangeText={(e) => {
          setState(e);
        }}
      />
    </View>
  );
}
