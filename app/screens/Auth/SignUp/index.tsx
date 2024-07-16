import { Header, Screen, Text } from "app/components"
import React from "react"
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
  Button,
} from "react-native"
import RNPickerSelect from "react-native-picker-select"
import { styles } from "./style"
import { spacing } from "app/theme"

const ComponentWithError = () => {
  React.useEffect(() => {
    throw new Error("This is a test error thrown by ComponentWithError.")
  }, [])

  return null
}

const SignUpScreen = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] = React.useState(false)

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      preset="scroll"
    >
      <Button title="Throw error" onPress={() => setIsErrorComponentVisible(true)} />
      {isErrorComponentVisible && <ComponentWithError />}
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  flex: 1,
}

export default SignUpScreen
