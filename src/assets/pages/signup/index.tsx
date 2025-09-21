import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSignup = () => {
    // Aqui você poderia salvar no backend/Firebase
    navigation.navigate("Home"); // vai direto para Home depois do cadastro
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Criar Conta</Text>

      <TextInput
        style={style.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={style.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={style.button} onPress={handleSignup}>
        <Text style={style.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={style.linkText}>Já tem conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
