import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { trackVisit } from './utils/analytics'
import ShootingStars from './components/ShootingStars'

function App() {
  const location = useLocation()

  useEffect(() => {
    trackVisit(location.pathname)
  }, [location])

  return (
    <>
      {/* ⭐ ستاره‌های رولز رویس */}
      <div className="starry-bg"></div>
      <ShootingStars/>

      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App