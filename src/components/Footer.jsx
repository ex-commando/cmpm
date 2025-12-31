import { MapPin, Phone, Mail, Facebook, Youtube, Heart, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="CMPM Logo" className="h-16 w-auto brightness-200 grayscale-0 opacity-90" />
                            <div>
                                <h3 className="text-xl font-heading font-bold tracking-tight text-white">Christ Messengers</h3>
                                <p className="text-[0.6rem] text-primary-500 font-bold tracking-[0.25em] uppercase">Prophetic Ministry</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Building people of fire, impacting lives, and changing destinies through the undiluted Word, grace, and power of God. Join us in this move of the Spirit.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <a href="#" className="p-3 bg-gray-900 rounded-full hover:bg-primary-600 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-black/30">
                                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="https://www.youtube.com/@christpowerchurch" target="_blank" rel="noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-red-600 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-black/30">
                                <Youtube className="h-5 w-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-lg font-heading font-bold mb-6 text-white text-left">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Ministries', 'Contact', 'Donate'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                        className="text-gray-400 hover:text-primary-400 hover:pl-2 transition-all text-sm flex items-center gap-2"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4">
                        <h4 className="text-lg font-heading font-bold mb-6 text-white text-left">Contact Info</h4>
                        <ul className="space-y-5 text-gray-400 text-sm">
                            <li className="flex items-start gap-4 group">
                                <div className="bg-gray-900 p-2 rounded-lg shrink-0 group-hover:bg-primary-900/50 transition-colors">
                                    <MapPin className="h-5 w-5 text-primary-500" />
                                </div>
                                <span className="pt-1 font-light">Angwan Jarawa, Jos north, Plateau state Nigeria</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="bg-gray-900 p-2 rounded-lg shrink-0 group-hover:bg-primary-900/50 transition-colors">
                                    <Phone className="h-5 w-5 text-primary-500" />
                                </div>
                                <span className="font-light">+234 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="bg-gray-900 p-2 rounded-lg shrink-0 group-hover:bg-primary-900/50 transition-colors">
                                    <Mail className="h-5 w-5 text-primary-500" />
                                </div>
                                <span className="font-light">info@cmpm.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-light">
                    <p>&copy; {new Date().getFullYear()} Christ Messengers Prophetic Ministry. All rights reserved.</p>
                    <p className="flex items-center gap-1">Designed with <Heart className="h-3 w-3 text-red-900 fill-current" /> by CMPM Media</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
