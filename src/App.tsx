import { DateFilterType } from './GetData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageEvenementType from './page/PageEvenementType'
import Home from './page/Home'
import NotFound from './page/NotFound'
import "./assets/style/styleIndex.css"
import About from './page/About'
import Contact from './page/Contact'
import PageEvents from './page/PageEvenementType'
import Amf from './page/Amf'
import PageProchainEvent from './page/PageProchainEvent'


function App() {
  /*const [newRoute, setNewRoute] = useState<JSX.Element[]>([]);
  const hasFetchedData = useRef(false);
  useEffect(() => {
    
    async function createRoute() {
      if (!hasFetchedData.current) {
        hasFetchedData.current = true
        const routes: JSX.Element[] = [];
        await managerEvent.fetchData();

        Object.values(DateFilterType).forEach((type => {
          routes.push(
            <Route key={type} path={`/evenement/${type}`} element={<PageEvenementType getEvenement={type} />}/>
          )
        }))
       
        setNewRoute(routes);
      }
    }
    createRoute();
  }, [managerEvent]);    
  */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prestation-passe" element={<PageEvents />} />
        <Route path="/prestation-futur" element={<PageProchainEvent />} />
        <Route path="/amf" element={<Amf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
