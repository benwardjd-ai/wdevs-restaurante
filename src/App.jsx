import Intro from './components/Intro'
import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Signatures from './components/Signatures'
import Menu from './components/Menu'
import Fire from './components/Fire'
import Mezcaleria from './components/Mezcaleria'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Visit from './components/Visit'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll(-72)
  useReveal()

  return (
    <>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Signatures />
        <Menu />
        <Fire />
        <Mezcaleria />
        <Gallery />
        <Reservation />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
