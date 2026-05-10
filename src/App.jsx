import { createContext, useState } from "react"
import Layout from "./components/Layout"



export const TheamContext = createContext(null);

function App() {
  
  const [theme, setTheme ]= useState("ligth");

  const toggleTheam = () => {
    setTheme((prev) => prev === "ligth" ? "dark" : "ligth")
  }


  return (
    <TheamContext.Provider value={{ theme, toggleTheam}}>
      <Layout />
    </TheamContext.Provider>
  )
}

export default App
