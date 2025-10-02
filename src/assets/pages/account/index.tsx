import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";

const fmtBRL = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

function Card({
  label,
  value,
  hidden,
}: {
  label: string;
  value: number;
  hidden: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardLabel}>{label}</Text>
      <Text style={styles.cardValue}>{hidden ? "••••••" : fmtBRL(value)}</Text>
    </View>
  );
}

export default function Account() {
  const [hidden, setHidden] = useState(false);
  const [disponivel, setDisponivel] = useState(1250);
  const [poupanca, setPoupanca] = useState(3200);
  const [investidos, setInvestidos] = useState(1500);

  const total = useMemo(
    () => disponivel + poupanca + investidos,
    [disponivel, poupanca, investidos]
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>Minha Conta</Text>
      <Text style={styles.subtitle}>Acompanhe seus saldos</Text>

      <TouchableOpacity
        onPress={() => setHidden((v) => !v)}
        style={styles.eyeBtn}
      >
        <Text style={styles.eyeText}>
          {hidden ? "Mostrar valores" : "Ocultar valores"}
        </Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <Card label="Disponível" value={disponivel} hidden={hidden} />
        <Card label="Poupança" value={poupanca} hidden={hidden} />
        <Card label="Investidos" value={investidos} hidden={hidden} />
        <Card label="Total" value={total} hidden={hidden} />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => setDisponivel((v) => v + 100)}
          style={[styles.btn, styles.btnPrimary]}
        >
          <Text style={styles.btnPrimaryText}>Depositar +100</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setDisponivel((v) => Math.max(0, v - 50))}
          style={[styles.btn, styles.btnGhost]}
        >
          <Text style={styles.btnGhostText}>Retirar -50</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
