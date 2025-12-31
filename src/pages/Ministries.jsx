import { GraduationCap, BookOpen, Flame, Heart } from 'lucide-react'

const Ministries = () => {
    return (
        <div className="bg-gray-50/50 min-h-screen">
            {/* Header */}
            <div className="relative bg-gray-900 py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                {/* Glassy Title Box */}
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-bold tracking-widest uppercase mb-6 font-heading">Our Impact</span>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl drop-shadow-lg mb-6 font-heading">
                        Our Ministries
                    </h1>
                    <p className="max-w-xl mx-auto text-xl text-gray-200 font-light">
                        Serving the community, equipping the saints, and raising the next generation.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-24 space-y-24">

                {/* Zion Standard Academy Section */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-primary-500/10 transition-shadow duration-500">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-5 bg-gradient-to-br from-secondary-600 to-secondary-800 p-12 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 rotate-12">
                                <GraduationCap className="h-64 w-64" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-secondary-200 font-semibold tracking-wide uppercase mb-2">Education Arm</h3>
                                <h2 className="text-4xl font-extrabold mb-6">Zion Standard Academy</h2>
                                <p className="text-secondary-100 text-lg leading-relaxed mb-8">
                                    A tuition-free school aimed at providing quality education to the poor, orphaned, and less privileged.
                                </p>
                                <div className="inline-flex items-center space-x-3 text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                    <BookOpen className="h-5 w-5" />
                                    <span>Character & Competence</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 p-12 lg:p-16">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">A Tool for Destiny Elevation</h3>
                            <div className="prose prose-lg text-gray-600 prose-headings:text-gray-800">
                                <p className="mb-4">
                                    As part of our commitment to <span className="text-secondary-600 font-semibold">social transformation</span> and kingdom advancement, the ministry established this academy to mirror the heartbeat of Jesus:
                                </p>
                                <blockquote className="border-l-4 border-secondary-500 pl-4 italic text-gray-800 my-6 bg-secondary-50 p-4 rounded-r-lg">
                                    "Suffer the little children to come unto me..." <span className="text-sm block not-italic mt-2 text-gray-500">- Mark 10:14</span>
                                </blockquote>
                                <p>
                                    Education is a tool for destiny elevation, and through this school, we intend to raise future leaders equipped in both character and competence. We believe every child deserves a chance to shine.
                                </p>
                            </div>
                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <div className="flex-1 w-full">
                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-secondary-400 to-secondary-600 w-3/4 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2 font-medium">Impact Goal: Educating 1000+ Children</p>
                                    </div>
                                    <button className="px-8 py-3 bg-gray-900 text-white rounded-xl text-sm font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-0.5 transition-all">
                                        Support Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* House of Fire / Movement Section */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50 hover:shadow-primary-500/10 transition-shadow duration-500">
                    <div className="lg:grid lg:grid-cols-12">
                        <div className="lg:col-span-7 p-12 lg:p-16 order-2 lg:order-1">
                            <h3 className="text-primary-600 font-semibold tracking-wide uppercase mb-2">The Movement</h3>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">House of Fire</h3>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-4">
                                    Christ Messengers Prophetic Ministry is more than a church; it is a movement — a divine firestorm of revivalists, intercessors, prophets, and kingdom builders.
                                </p>
                                <p>
                                    We burn with passion for Jesus and long to see every life we touch set ablaze for God.
                                </p>
                                <div className="bg-primary-50 border border-primary-100 p-4 rounded-xl mt-4">
                                    <em className="text-primary-800 font-serif text-xl block mb-2">“Who maketh his angels spirits; his ministers a flame of fire.”</em>
                                    <span className="text-sm font-bold text-primary-600 uppercase tracking-wider">– Hebrews 1:7</span>
                                </div>
                            </div>
                            <div className="mt-10 grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-primary-50 to-white p-4 rounded-2xl border border-primary-100 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-primary-800 text-lg">Revival</h4>
                                    <p className="text-sm text-primary-600">Igniting Spirits</p>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-2xl border border-orange-100 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-orange-800 text-lg">Healing</h4>
                                    <p className="text-sm text-orange-600">Restoring Bodies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 bg-gradient-to-bl from-primary-600 to-primary-800 p-12 text-white flex flex-col justify-center relative overflow-hidden order-1 lg:order-2">
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 opacity-20 rotate-12">
                                <Flame className="h-80 w-80" />
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-extrabold mb-6">Join the Movement</h2>
                                <p className="text-primary-100 text-lg leading-relaxed mb-8">
                                    Be part of a generation that seeks His face. Experience the raw power of God.
                                </p>
                                <div className="inline-flex items-center space-x-3 text-sm font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                    <Heart className="h-5 w-5" />
                                    <span>Passionate for Jesus</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ministries
