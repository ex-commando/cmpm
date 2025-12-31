import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

import AnimatedBackground from './AnimatedBackground'

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <AnimatedBackground />
            <Navbar />
            <main className="flex-grow z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
