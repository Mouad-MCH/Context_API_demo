import { Atom } from "lucide-react"


const Header = () => {
  return (
    <header>
        <div className="logo ">
            <Atom className="w-10 h-10"/>
            <h1 className="text-2xl font-bold text-gray-800">Quantum JS</h1>
        </div>
    </header>
  )
}

export default Header