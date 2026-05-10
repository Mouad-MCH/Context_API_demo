import { ChartArea, Home, Settings, User } from 'lucide-react'
import React from 'react'

const Sidebar = () => {

    const menuItems = [
        { icon: <Home />, label: 'الرئيسية' },
        { icon: <User/>, label: 'الملف الشخصي' },
        { icon: <Settings />, label: 'الإعدادات' },
        { icon: <ChartArea />, label: 'الإحصائيات' },
    ]


  return (
    <aside className='sidebare'>
        <div className="sidebar_header flex items-center gap-4 pb-5 mb-5 border-b-2 border-border-light">
            <div className="avatar w-15 h-15 rounded-full bg-secondary-solid flex-center text-white font-bold text-2xl">M</div>

            <div className="info">
                <h3 className='font-extrabold text-lg'>Mouad</h3>
                <p className='text-text-muted-light text-sm'>Full Stack Devloper</p>
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