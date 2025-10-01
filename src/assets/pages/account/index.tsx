import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { styles } from "./styles";

const fmtBRL = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

function Card({ label, value, hidden }: { label: string; value: number; hidden: boolean }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardLabel}>{label}</Text>
      <Text style={styles.cardValue}>{hidden ? "••••••" : fmtBRL(value)}</Text>
    </View>
  );
}

export default function Account() {
  const [disponivel, setDisponivel] = useState(867.43);
  const [investido, setInvestido] = useState(1678.9);
  const [rendimentos, setRendimentos] = useState(84.98);
  const [hidden, setHidden] = useState(false);

  const total = useMemo(() => disponivel + investido + rendimentos, [disponivel, investido, rendimentos]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Conta</Text>
      <Text style={styles.subtitle}>Seu saldo e investimentos</Text>

      <TouchableOpacity onPress={() => setHidden((h) => !h)} style={styles.eyeBtn}>
        <Text style={styles.eyeText}>{hidden ? "Mostrar valores" : "Ocultar valores"}</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <Card label="Disponível" value={disponivel} hidden={hidden} />
        <Card label="Investido" value={investido} hidden={hidden} />
        <Card label="Rendimentos" value={rendimentos} hidden={hidden} />
        <Card label="Total" value={total} hidden={hidden} />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => setDisponivel((v) => v + 100)} style={[styles.btn, styles.btnPrimary]}>
          <Text style={styles.btnPrimaryText}>Depositar +100</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDisponivel((v) => Math.max(0, v - 50))} style={[styles.btn, styles.btnGhost]}>
          <Text style={styles.btnGhostText}>Retirar -50</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
