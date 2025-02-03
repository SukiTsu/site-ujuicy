import { DateFilterType } from './GetData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageEvenementType from './page/PageEvenementType'
import Home from './page/Home'
import NotFound from './page/NotFound'
import "./assets/style/styleIndex.css"
import About from './page/About'
import Contact from './page/Contact'


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
        <Route path={`/evenement/${DateFilterType.PAST}`} element={<PageEvenementType getEvenement={DateFilterType.PAST} />}/>
        <Route path={`/evenement/${DateFilterType.FUTURE}`} element={<PageEvenementType getEvenement={DateFilterType.FUTURE} />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
