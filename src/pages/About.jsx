import { Shield, Zap, Mic, Coins, Target, Globe } from 'lucide-react'
import aboutImage from '../assets/about_ministry.jpg'

const About = () => {
    return (
        <div className="bg-gray-50/50">
            {/* Header - Glassy Overlay */}
            <div className="relative py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-primary-900"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Floating Shapes */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-200 text-xs font-bold tracking-widest uppercase mb-6 font-heading">Who We Are</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 drop-shadow-lg font-heading">
                        About The Ministry
                    </h1>
                    <p className="mt-6 text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                        A Spirit-filled Apostolic and Prophetic movement rooted in God's Word, Grace, and Power.
                    </p>
                </div>
            </div>

            {/* Overview - Split Section */}
            <div className="py-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 -skew-x-12 transform origin-top-right z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-12 lg:mb-0 relative group">
                            {/* Image Frame */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative rounded-2xl shadow-2xl overflow-hidden h-[500px] w-full border-4 border-white">
                                <img
                                    src={aboutImage}
                                    alt="Ministry History"
                                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                                <span className="absolute bottom-6 left-8 text-white font-bold text-xl tracking-wide flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-ping"></span>
                                    Jos • Port-Novo
                                </span>
                            </div>
                        </div>
                        <div className="prose prose-lg prose-indigo text-gray-600">
                            <h3 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Our Roots</h3>
                            <p className="lead text-lg mb-6">
                                Christ Messengers Prophetic Ministry, widely known as <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">House of Fire</strong>, was birthed in 2011 as a campus fellowship.
                            </p>
                            <p className="mb-6">
                                Starting at the University of Jos and Université des Sciences Appliquées et de Management (USAM) in Benin Republic, it has grown into a full-fledged ministry based in Jos, Plateau State, Nigeria.
                            </p>
                            <p className="p-6 bg-white/60 backdrop-blur-sm rounded-xl border-l-4 border-primary-500 shadow-sm italic text-gray-700">
                                "Rooted in the supernatural dimensions of God’s Word, grace, and power, House of Fire is committed to raising a generation of firebrand believers."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision & Mission Cards - Glassy */}
            <div className="bg-gray-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -left-20 top-20 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -right-20 bottom-20 w-72 h-72 bg-secondary-600/20 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Vision Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-1 border border-white/10 hover:border-primary-500/50 transition-colors duration-300">
                            <div className="bg-gray-900/50 rounded-[22px] p-8 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Target className="w-32 h-32 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary-500/20 text-primary-400 mb-6 border border-primary-500/30">
                                        <Target className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-6">Vision Statement</h2>
                                    <blockquote className="text-xl italic font-medium text-gray-300 mb-6 border-l-2 border-primary-500 pl-4">
                                        "Building people of fire, impacting lives and changing destinies in accordance with the Word, grace and power of God."
                                    </blockquote>
                                    <p className="text-gray-400 leading-relaxed">
                                        We are called to ignite spiritual fire in men and women, empowering them to live purposefully. Our vision is to produce believers who are spiritually fervent, Word-grounded, and destiny-conscious.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-1 border border-white/10 hover:border-secondary-500/50 transition-colors duration-300">
                            <div className="bg-gray-900/50 rounded-[22px] p-8 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Globe className="w-32 h-32 text-white" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center p-3 rounded-xl bg-secondary-500/20 text-secondary-400 mb-6 border border-secondary-500/30">
                                        <Globe className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-6">Mission Statement</h2>
                                    <blockquote className="text-xl italic font-medium text-gray-300 mb-6 border-l-2 border-secondary-500 pl-4">
                                        "Raising apostolic and prophetic vibrant ministers of the Gospel who will spread the Word of God and raise the downtrodden."
                                    </blockquote>
                                    <p className="text-gray-400 leading-relaxed">
                                        Rooted in Ephesians 4:11–12, we equip saints for ministry. We train kingdom ambassadors to evangelize, prophesy, heal, teach, and lift the broken-hearted.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="py-24 bg-gray-50 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm bg-primary-100 px-3 py-1 rounded-full">Our Pillars</span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">Core Values</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Purity */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary-50 text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                <Shield className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Purity</h3>
                            <p className="text-gray-600 mb-4 text-sm">Living a consecrated life in holiness and obedience.</p>
                            <span className="inline-block text-xs font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded">Hebrews 12:14</span>
                        </div>

                        {/* Power */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <div className="inline-flex items-center justify-center p-4 rounded-xl bg-secondary-50 text-secondary-600 mb-6 group-hover:bg-secondary-500 group-hover:text-white transition-colors">
                                <Zap className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Power</h3>
                            <p className="text-gray-600 mb-4 text-sm">Manifesting the gifts and fruits of the Holy Spirit.</p>
                            <span className="inline-block text-xs font-bold text-secondary-600 bg-secondary-50 px-2 py-1 rounded">Acts 1:8</span>
                        </div>

                        {/* Prophecy */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <div className="inline-flex items-center justify-center p-4 rounded-xl bg-purple-50 text-purple-600 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <Mic className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Prophecy</h3>
                            <p className="text-gray-600 mb-4 text-sm">Speaking the mind of God with accuracy and integrity.</p>
                            <span className="inline-block text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">Amos 3:7</span>
                        </div>

                        {/* Prosperity */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <div className="inline-flex items-center justify-center p-4 rounded-xl bg-green-50 text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <Coins className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Prosperity</h3>
                            <p className="text-gray-600 mb-4 text-sm">Advancing God’s kingdom through divine provision.</p>
                            <span className="inline-block text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">3 John 2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
