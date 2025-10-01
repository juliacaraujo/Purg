import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Bem-vindo a Purg 🎉</Text>
      <Text style={style.subtitle}>Você entrou com sucesso!</Text>

      {/* Botão para sair (Login) */}
      <TouchableOpacity 
        style={style.button} 
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.buttonText}>Sair</Text>
      </TouchableOpacity>

      {/* Novo botão para ir para Conta */}
      <TouchableOpacity 
        style={[style.button, { marginTop: 16, backgroundColor: "#14532d" }]} 
        onPress={() => navigation.navigate("Account")}
      >
        <Text style={style.buttonText}>Ir para Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
