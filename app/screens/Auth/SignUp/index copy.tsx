import { Button } from "app/components"
import React from "react"
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import RNPickerSelect from "react-native-picker-select"
import { styles } from "./style"

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Sign up</Text>
      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <View style={styles.phoneContainer}>
        <Image source={{ uri: "link-to-flag-image" }} style={styles.flag} />
        <Text style={styles.phoneCode}>+880</Text>
        <TextInput
          placeholder="Your mobile number"
          style={styles.phoneInput}
          keyboardType="phone-pad"
        />
      </View>
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
        <Text style={styles.termsText}>By signing up, you agree to the </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Terms of service</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}> and </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Privacy policy</Text>
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
    </View>
  )
}

export default SignUpScreen
