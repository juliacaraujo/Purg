import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import { style } from "./styles";
import Logo from "../../logo.png";

export default function Login() {
  return (
    <View style={style.container}>
      
      {/* Top Section */}
      <View style={style.boxTop}>
        <Image source={Logo}
        style={style.logo} 
        resizeMode="contain"/>
        
        <Text style={style.text}>Bem-vindo de volta!</Text>
      </View>

      {/* Middle Section */}
      <View style={style.boxMid}>
        <Text style={style.titleInput}>Endereço de E-mail</Text>
        <View style={style.BoxInput}>
        <TextInput style={style.input} />
        <Text> Ola </Text>
        </View>
        <TextInput />
        <Text style={style.titleInput}> SENHA
            </Text>
            <TextInput/>
      </View>

      {/* Bottom Section */}
      <View style={style.boxBottom}>
        <Text>Bottom</Text>
      </View>
      
    </View>
  );
}
