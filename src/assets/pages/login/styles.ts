import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background, // cor vinda do tema
  },
  boxTop: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMid: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
    paddingHorizontal: 37,
    justifyContent: "center",
  },
  boxBottom: {
    height: Dimensions.get("window").height / 3.5,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  text: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 28,
    color: theme.colors.textPrimary, // texto principal
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    color: theme.colors.textPrimary,
  },
  loginButton: {
    backgroundColor: theme.colors.primary, // verde do tema
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: theme.colors.buttonText, // texto do botão
    fontSize: 16,
    fontWeight: "600",
  },
  separatorBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },
  separatorText: {
    marginHorizontal: 10,
    color: theme.colors.textSecondary,
  },
  signupButton: {
    backgroundColor: theme.colors.black, // botão preto
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  signupButtonText: {
    color: theme.colors.buttonText,
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    textAlign: "center",
    lineHeight: 18,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },
});
