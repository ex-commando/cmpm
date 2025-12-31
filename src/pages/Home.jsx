import { ArrowRight, Play, Sparkles, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import YouTubeLive from '../components/YouTubeLive'
import EventsSection from '../components/EventsSection'
import LatestSermons from '../components/LatestSermons'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import pastorsImage from '../assets/pastors.jpg'

const Home = () => {
    // Images array for the slider
    const sliderImages = [hero1, hero2, hero3];

    return (
        <div className="bg-gray-50">
            {/* Hero Section with Slider */}
            <HeroSlider images={sliderImages} />

            {/* Welcome / Mission Highlight in Parallax Container */}
            <div className="relative py-24 md:py-32 overflow-hidden bg-white">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-radial from-primary-100/40 to-transparent rounded-full blur-3xl opacity-60"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 shadow-sm animate-fade-in-up">
                                <Sparkles className="h-4 w-4 text-primary-600" />
                                <span className="text-xs font-bold text-primary-800 tracking-wider uppercase">Welcome to House of Fire</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-gray-900 leading-[0.9] relative z-10">
                                Igniting <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Spiritual Fire</span>
                            </h2>
                            {/* Giant Background Flame - Removed */}

                            <p className="text-xl text-gray-600 leading-relaxed font-light border-l-4 border-primary-200 pl-6">
                                We are committed to raising a generation of firebrand believers passionate about the <span className="font-semibold text-primary-700">presence of God</span>, purity of life, prophetic accuracy, and kingdom prosperity.
                            </p>

                            <div className="pt-4 flex flex-wrap gap-4">
                                <Link to="/about" className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-primary-700 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 group">
                                    Read Our Story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="https://www.youtube.com/@christpowerchurch" target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full border border-gray-200 text-gray-900 font-bold text-sm uppercase tracking-widest hover:border-primary-600 hover:text-primary-600 transition-all flex items-center gap-2 group">
                                    <Play className="h-4 w-4 fill-current" /> Watch Video
                                </a>
                            </div>
                        </div>

                        {/* Pastors Image Section with Frame */}
                        <div className="relative group perspective-1000">
                            {/* Decorative Frame Elements */}
                            <div className="absolute -inset-4 border-2 border-primary-100 rounded-[2rem] z-0 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary-900/10 z-10 transform transition-transform duration-500 group-hover:scale-[1.01]">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
                                <img
                                    src={pastorsImage}
                                    alt="Prophet Dr. Maxwell and Prophetess Ngozi Iruobe"
                                    className="w-full h-auto object-cover transform"
                                />

                                <div className="absolute bottom-0 left-0 w-full p-8 z-30 text-white">
                                    <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-2">Lead Pastors</p>
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold leading-none">
                                            Prophet Dr. Maxwell & <br /> Prophetess Ngozi Iruobe
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Section */}
            <EventsSection />

            {/* Latest Sermons */}
            <LatestSermons />

            {/* Quote Parallax Section */}
            <div className="relative py-40 bg-fixed bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${hero3})` }}>
                <div className="absolute inset-0 bg-primary-950/80 mix-blend-multiply"></div>

                <div className="relative max-w-5xl mx-auto text-center px-4 z-10">
                    <div className="inline-block p-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
                        <div className="px-4 py-1 bg-white/10 rounded-full">
                            <p className="text-secondary-400 font-bold uppercase tracking-widest text-xs">Prophetic Mandate</p>
                        </div>
                    </div>

                    <blockquote className="text-3xl md:text-6xl font-heading font-normal italic text-white leading-tight mb-12 drop-shadow-2xl">
                        "Just as people in the end times are drawn to the mountain of the Lord for truth... Christ Messengers Prophetic Fire Ministry is called to be a <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">modern-day Zion</span>."
                    </blockquote>

                    <div className="flex justify-center">
                        <Link to="/about" className="px-8 py-3 rounded-full bg-white text-primary-900 font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-black/20">
                            Read Our Story
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
