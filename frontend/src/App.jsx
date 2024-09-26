// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// react router dom
import { 
  createBrowserRouter, 
  RouterProvider, 
  Route,
  createRoutesFromElements 
} from 'react-router-dom'

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorPage from './ErrorPage'

// layouts
import Root from './layouts/root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>


      <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router = {router} />
  )
}

export default App
