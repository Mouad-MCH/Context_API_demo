import { useContext } from 'react'
import Header from './Header'
import { TheamContext } from '../App'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

const Layout = () => {
  const {theme} = useContext(TheamContext)
  return (
    <aside className="layout">
        <Header />
        <div className='flex gap-3 w-full'>
            <Sidebar />
            <MainContent />
        </div>


    </aside>
  )
}

export default Layout