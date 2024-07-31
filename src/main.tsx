import React from "react"
import GlobalStyle from "./styles/global"
import FontStyles from "./styles/fontStyles"

import { createRoot } from "react-dom/client"
import App from "./App/App"

const container = document.getElementById("root")

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <FontStyles />
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
