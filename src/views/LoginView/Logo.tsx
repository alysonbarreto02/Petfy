import React from "react";
import { View, Image } from "react-native";

export default function Logo() {
  return (
    <View className="items-center mt-14">
      <Image
        source={require("../../../assets/Logo.png")}
        className="w-48 h-48"
      />
    </View>
  );
}
