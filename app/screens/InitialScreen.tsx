import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Text } from "app/components"
import { isRTL } from "../i18n"
import { colors, spacing } from "../theme"
import { DrawerParamList } from "app/navigators/DrawerNavigator"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { MainStackParamList } from "app/navigators/stack/stacks.types"
import { GENERAL_SCREENS } from "app/navigators/utils/routes.enum"
const welcomeFace = require("../../assets/images/welcome-face.png")

type InitialScreenProps = NativeStackScreenProps<MainStackParamList, GENERAL_SCREENS.INITIAL>

export const InitialScreen: FC<InitialScreenProps> = observer(function InitialScreen(_props) {
  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Text
          testID="welcome-heading"
          style={$welcomeHeading}
          tx="welcomeScreen.readyForLaunch"
          preset="heading"
        />
        <Text tx="welcomeScreen.exciting" preset="subheading" />
        <Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}
