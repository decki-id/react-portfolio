import './App.scss'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
