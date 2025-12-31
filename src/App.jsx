import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Ministries from './pages/Ministries'
import Contact from './pages/Contact'
import Donate from './pages/Donate'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="ministries" element={<Ministries />} />
                <Route path="contact" element={<Contact />} />
                <Route path="donate" element={<Donate />} />
            </Route>
        </Routes>
    )
}

export default App
