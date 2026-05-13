import { useContext } from 'react'
import { TheamContext, UserContext } from '../App'

export default function MainContent() {
  const { user, updateUser } = useContext(UserContext)
  const { theme } = useContext(TheamContext)

  const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer']

  return (
    <main className="main-content w-full">
      <div className="hero">
        <h2>🎯 Context API Demo</h2>
        <p className="subtitle">
         This deep component consumes data from the Context directly — without any prop drilling!
        </p>
      </div>

      <div className="cards-grid grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">

        <div className="card">

          <div className="card-icon">👤</div>

          <h3>المستخدم الحالي</h3>

          <div className="info-row">
            <span>الاسم:</span>
            <strong>{user?.name}</strong>
          </div>

          <div className="info-row">
            <span>الدور:</span>
            <strong>{user?.role}</strong>
          </div>

          <div className="info-row">
            <span>المجموعة:</span>
            <strong>{user?.group}</strong>
          </div>

        </div>

        <div className="card">
          <div className="card-icon">🎨</div>
          <h3>الثيم الحالي</h3>
          <div className="theme-display">
            <span className="theme-dot" data-theme={theme}></span>
            <strong>{theme === 'light' ? 'فاتح ☀️' : 'داكن 🌙'}</strong>
          </div>
          <p className="hint">جرّب الزر في الأعلى لتغيير الثيم</p>
        </div>

        <div className="card">
          <div className="card-icon">🔄</div>
          <h3>تغيير الدور</h3>
          <p className="hint">حدّث دور المستخدم مباشرةً:</p>
          <div className="role-buttons">
            {roles.map((role) => (
              <button
                key={role}
                className={`role-btn ${user?.role === role ? 'active' : ''}`}
                onClick={() => updateUser({ role })}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

    </main>
  )
}
