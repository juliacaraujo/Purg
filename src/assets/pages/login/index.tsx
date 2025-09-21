import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../logo.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // Depois você pode colocar validação de usuário
    navigation.navigate("Home"); // vai para Home depois do login
  };

  return (
    <View style={style.container}>
      
      {/* Top Section */}
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} />
        <Text style={style.text}>Purg</Text>
      </View>

      {/* Middle Section */}
      <View style={style.boxMid}>
        <TextInput
          style={style.input}
          placeholder="email@dominio.com"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
          <Text style={style.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        {/* Separador */}
        <View style={style.separatorBox}>
          <View style={style.line} />
          <Text style={style.separatorText}>ou</Text>
          <View style={style.line} />
        </View>

        <TouchableOpacity 
          style={style.signupButton} 
          onPress={() => navigation.navigate("Signup")} // vai para tela de cadastro
        >
          <Text style={style.signupButtonText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={style.boxBottom}>
        <Text style={style.footerText}>
          Ao clicar em <Text style={style.link}>Criar uma conta</Text>, você concorda com os nossos{" "}
          <Text style={style.link}>Termos de Serviço</Text> e com a{" "}
          <Text style={style.link}>Política de Privacidade</Text>
        </Text>
      </View>
    </View>
  );
}
