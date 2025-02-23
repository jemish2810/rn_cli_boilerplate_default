import { Platform } from "react-native"

const fonts = {
  poppins: {
    light: "Poppins-Light",
    normal: "Poppins-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
  },
  helveticaNeue: {
    thin: "HelveticaNeueThin",
    light: "HelveticaNeueLight",
    medium: "HelveticaNeueMedium",
  },
  courier: {
    normal: "CourierPrime-Regular",
    bold: "CourierPrime-Bold",
    // italic: "CourierPrime-Italic",
    // boldItalic: "CourierPrime-BoldItalic",
  },
  monospace: {
    normal: "Monospace",
    bold: "MonospaceBold",
    // oblique: "MonospaceOblique",
  },
  sansSerif: {
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.poppins,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
