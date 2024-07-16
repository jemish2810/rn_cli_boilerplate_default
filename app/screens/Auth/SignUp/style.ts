import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: "#000000",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  phoneCode: {
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
  },
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 20,
  },
  termsText: {
    fontSize: 14,
    color: "#666666",
  },
  linkText: {
    fontSize: 14,
    color: "#FF9900",
  },
  signUpButton: {
    backgroundColor: "#FF9900",
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666666",
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signInText: {
    fontSize: 14,
    color: "#666666",
  },
})

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  inputAndroid: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
})
