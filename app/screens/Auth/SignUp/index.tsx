import { Button, Header, Icon, Screen, Text, TextField } from "app/components"
import React, { useRef } from "react"
import { View, TextInput, TouchableOpacity, ViewStyle } from "react-native"
import { styles } from "./style"
import { SCREEN_HEIGHT, spacing } from "app/theme"
import { Formik } from "formik"
import * as Yup from "yup"
import Divider from "app/components/Divider"
import NavigationUtils from "app/navigators/utils/routes.helper"
import { useNavigation } from "@react-navigation/native"

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
})

const SignUpScreen = () => {
  const authNameInput = useRef<TextInput>(null)
  const navigation = useNavigation()

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      preset="scroll"
    >
      <Header leftIcon="back" leftText="Back" onLeftPress={() => navigation.goBack()} />
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ marginTop: 30, gap: 20 }}>
            <Text preset="title_md" weight="medium" color="text" text="Sign up" />
            <TextField
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              style={{ height: 30 }}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              label=""
              placeholder="Name"
              helper={touched.name && errors.name ? errors.name : ""}
              status={touched.name && errors.name ? "error" : undefined}
              onSubmitEditing={() => authNameInput.current?.focus()}
            />
            <TextField
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{ height: 30 }}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              helper={touched.email && errors.email ? errors.email : ""}
              status={touched.email && errors.email ? "error" : undefined}
              onSubmitEditing={() => authNameInput.current?.focus()}
            />
            <View style={styles.termsContainer}>
              <Text
                preset="body_md"
                weight="medium"
                color={"disable"}
                text={"By signing up, you agree to the "}
              />
              <TouchableOpacity>
                <Text preset="body_md" weight="medium" color="primary" text={"Terms of service"} />
              </TouchableOpacity>
              <Text preset="body_md" weight="medium" color={"disable"} text="and " />
              <TouchableOpacity>
                <Text preset="body_md" weight="medium" color="primary" text="Privacy policy" />
              </TouchableOpacity>
            </View>
            <Button text="Sign Up" preset="filled" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>

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
      <View style={styles.orContainer}>
        <Divider width={160} />
        <Text text="or" preset="body_lg" weight="medium" />
        <Divider width={175} />
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon icon="gmail" size={SCREEN_HEIGHT * 0.04} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon icon="faceBook" size={SCREEN_HEIGHT * 0.04} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon icon="apple" size={SCREEN_HEIGHT * 0.04} />
        </TouchableOpacity>
      </View>

      <View style={styles.signInContainer}>
        <Text text="Already have an account? " preset="body_lg" weight="medium" color="textDim" />
        <TouchableOpacity>
          <Text preset="body_md" weight="medium" color="primary" text={"Sign in"} />
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.md,
  flex: 1,
}

export default SignUpScreen
