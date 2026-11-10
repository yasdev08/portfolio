import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signage from './components/Signage'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}> </Route>
          <Route path='About' element={<About />}> </Route>
          <Route path='Contact' element={<Contact />}></Route>
          <Route path='signage' element={<Signage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
