import { colors } from "app/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  orContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    gap: 5,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    gap: 20,
  },
  socialButton: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.palette.gray200,
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
