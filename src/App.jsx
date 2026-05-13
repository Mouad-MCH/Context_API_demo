import { createContext, useState, useEffect } from "react"
import Layout from "./components/Layout"



export const TheamContext = createContext(null);
export const UserContext = createContext(null);

function App() {

  const [theme, setTheme ]= useState("ligth");
  const [user, setUser] = useState({
    name:"Mouad",
    role:'Full stack',
    group: "Group 2"
  })

  const toggleTheam = () => {
    setTheme((prev) => prev === "ligth" ? "dark" : "ligth")
  }

  const updateUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }))
  }

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <TheamContext.Provider value={{ theme, toggleTheam}}>
      <UserContext.Provider value={{ user, updateUser }}>
      <Layout />
      </UserContext.Provider>
    </TheamContext.Provider>
  )
}

export default App
