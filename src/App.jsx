import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShootingStars from './components/ShootingStars'

function App() {
  return (
    <>
      {/* ⭐️ ستاره‌های رولز رویس */}
      <div className="starry-bg"></div>
      <ShootingStars />

      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App