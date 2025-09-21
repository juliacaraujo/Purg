import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Bem-vindo a Purg 🎉</Text>
      <Text style={style.subtitle}>Você entrou com sucesso!</Text>

      <TouchableOpacity 
        style={style.button} 
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
