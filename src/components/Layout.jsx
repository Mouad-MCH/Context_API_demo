import { useContext } from 'react'
import Header from './Header'
import { TheamContext } from '../App'
import Sidebar from './Sidebar'

const Layout = () => {
  const {theme} = useContext(TheamContext)
  return (
    <aside className={`layout ${theme === "dark" ? "dark": "" }`}>
        <Header />
        <div>
            <Sidebar />

        </div>


    </aside>
  )
}

export default Layout