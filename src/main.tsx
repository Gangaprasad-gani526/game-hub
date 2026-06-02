import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "@/components/ui/provider"
import App from "./App"
import {SearchTextProvider} from './context/SearchTextProvider'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
       <SearchTextProvider>
      <App />
      </SearchTextProvider>
    </Provider>
  </React.StrictMode>,
)