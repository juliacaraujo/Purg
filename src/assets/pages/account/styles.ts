import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 28, fontWeight: "800", color: "#0f172a" },
  subtitle: { color: "#475569", marginTop: 2 },
  eyeBtn: { marginTop: 8, backgroundColor: "#e5e7eb", borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 },
  eyeText: { fontWeight: "600", color: "#111827" },

  grid: { gap: 12, marginTop: 16 },
  card: {
    backgroundColor: "#0f172a",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  cardLabel: { color: "white", opacity: 0.85, fontWeight: "600", marginBottom: 6 },
  cardValue: { color: "white", fontSize: 22, fontWeight: "800" },

  actions: { flexDirection: "row", gap: 12, marginTop: 18 },
  btn: { flex: 1, paddingVertical: 14, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  btnPrimary: { backgroundColor: "#14532d" },
  btnGhost: { borderWidth: 1, borderColor: "#cbd5e1" },
  btnPrimaryText: { color: "white", fontWeight: "700" },
  btnGhostText: { color: "#0f172a", fontWeight: "700" },
});
