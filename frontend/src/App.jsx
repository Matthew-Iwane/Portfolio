// react router dom
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route,
  createRoutesFromElements 
} from 'react-router-dom'

// pages
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import About from "./pages/About"
import Work from "./pages/Work"

// error page
import Error from './pages/Error'

// layouts
import Root from './layouts/root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>}/>
      <Route path="resume" element={<Resume/>}/>
      <Route path="about" element={<About />}/>
      <Route path="work" element={<Work />}/>

      <Route path="*" element={<Error/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router = {router} />
  )
}

export default App
