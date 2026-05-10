import { Atom, Moon, Sun } from "lucide-react"
import { useContext } from "react"
import { TheamContext } from "../App"


const Header = () => {
  const {theme, toggleTheam} = useContext(TheamContext)
  return (
    <header className="header ">
        <div className="logo flex items-center gap-5">
            <Atom className="atom"/>
            <h1 className="text-2xl font-bold ">Quantum JS</h1>
        </div>

        <div className="lift_side font-bold flex-center gap-5">
          <h3 className="">Hello <span className="text-badge-dark uppercase font-extrabold">mouad</span></h3>
          <button 
            className="header_btn "
            onClick={toggleTheam}
            
          >
            { theme === "dark" ? <Sun className="text-accent-border"/> : <Moon className="text-accent-border" /> }
            {theme === "ligth" ? "Dark" : "ligth"}</button>
        </div>
    </header>
  )
}

export default Header