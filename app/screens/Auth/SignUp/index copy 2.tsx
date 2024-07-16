import { Button, Header, Screen, Text } from "app/components"
import React from "react"
import { View, TextInput, StyleSheet, TouchableOpacity, Image, ViewStyle } from "react-native"
import RNPickerSelect from "react-native-picker-select"
import { styles } from "./style"
import { spacing } from "app/theme"

const SignUpScreen = () => {
  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      preset="scroll"
    >
      {/* <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity> */}
      <Header
        leftIcon="back"
        leftText="Back"
        onLeftPress={() => console.log("Back pressed")}
        onRightPress={() => console.log("Settings pressed")}
      />
      <Text preset="title_md" weight="medium" color="text" text="Sign up" />
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />

      {/* <RNPickerSelect
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
        placeholder={{ label: "Gender", value: null }}
        style={pickerSelectStyles}
      /> */}
      <View style={styles.termsContainer}>
        <Text preset="body_md" weight="medium">
          By signing up, you agree to the{" "}
        </Text>
        <TouchableOpacity>
          <Text preset="body_md" weight="medium" color="primary">
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text preset="body_md" weight="medium">
          and{" "}
        </Text>
        <TouchableOpacity>
          <Text preset="body_md" weight="medium" color="primary">
            Privacy policy
          </Text>
        </TouchableOpacity>
      </View>
      <Button text="Sign Up" preset="filled" style={styles.signUpButton} />
      <Text style={styles.orText}>or</Text>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: "link-to-google-icon" }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: "link-to-facebook-icon" }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: "link-to-apple-icon" }} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  flex: 1,
}

export default SignUpScreen
