import React from "react"
import App from "./app/app"
import { delay } from "./app/utils/delay"

function AppWrapper() {
  return (
    <App
      hideSplashScreen={() =>
        delay(5000).then(() => {
          return false
        })
      }
    />
  )
}

export default AppWrapper
