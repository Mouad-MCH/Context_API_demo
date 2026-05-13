import { ChartArea, Home, Settings, User } from 'lucide-react'
import React, { useContext } from 'react'
import { UserContext } from '../App'

const Sidebar = () => {

    const menuItems = [
        { icon: <Home />, label: 'الرئيسية' },
        { icon: <User/>, label: 'الملف الشخصي' },
        { icon: <Settings />, label: 'الإعدادات' },
        { icon: <ChartArea />, label: 'الإحصائيات' },
    ]

    const { user } = useContext(UserContext)


  return (
    <aside className='sidebare h-fit min-w-70'>
        <div className="sidebar_header flex items-center gap-4 pb-5 mb-5 border-b-2 border-border-light">
            <div className="avatar w-15 h-15 rounded-full bg-secondary-solid flex-center text-white font-bold text-2xl">M</div>

            <div className="info">
                <h3 className='font-extrabold text-lg'>Mouad</h3>
                <p className='text-text-muted-light text-sm'>{user?.role}</p>
                <span className='text-sm'>Quantum JS</span>
            </div>

        </div>

        <nav>
            {
                menuItems.map((menu) => (
                    <a href="#" key={menu.label} >
                        <span>{menu.icon}</span>
                        {menu.label}
                    </a>
                ))
            }
        </nav>        


    </aside>
  )
}

export default Sidebar