import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import NotFound from './page/NotFound'
import "./assets/style/styleIndex.css"
import About from './page/About'
import Contact from './page/Contact'
import Amf from './page/Amf'
import PageProchainEvent from './page/PageProchainEvent'
import PagePastEvents from './page/PagePasseEvenement'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prestation-passe" element={<PagePastEvents />} />
        <Route path="/prestation-futur" element={<PageProchainEvent />} />
        <Route path="/amf" element={<Amf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
