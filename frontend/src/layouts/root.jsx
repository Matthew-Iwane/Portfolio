import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/nav/Navigation' 

const root = () => {
  return (
    <div className="root-layout">
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default root