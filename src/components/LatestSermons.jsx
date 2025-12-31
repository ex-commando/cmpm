import { Play } from 'lucide-react'

// Placeholder data for sermons
const sermons = [
    {
        id: 1,
        title: "The Mystery of the Altar",
        preacher: "Prophet Dr. Maxwell Iruobe",
        date: "Dec 24, 2023",
        thumbnail: "https://images.unsplash.com/photo-1507692049790-de58293a4697?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "1h 15m"
    },
    {
        id: 2,
        title: "Walking in Dominion",
        preacher: "Prophetess Ngozi Iruobe",
        date: "Dec 17, 2023",
        thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "58m"
    },
    {
        id: 3,
        title: "Provoking Divine Favor",
        preacher: "Prophet Dr. Maxwell Iruobe",
        date: "Dec 10, 2023",
        thumbnail: "https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "1h 22m"
    }
]

const LatestSermons = () => {
    return (
        <div className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-secondary-500 font-bold tracking-widest uppercase text-sm mb-2 block font-heading">Word of Life</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">Latest Sermons</h2>
                    </div>
                    <a href="#" className="px-6 py-3 rounded-full border border-gray-600 hover:border-secondary-500 hover:text-secondary-500 transition-all font-semibold">
                        View All Archives
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sermons.map((sermon) => (
                        <div key={sermon.id} className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                            {/* Thumbnail */}
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={sermon.thumbnail}
                                    alt={sermon.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="h-14 w-14 rounded-full bg-primary-600/90 text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all shadow-lg shadow-primary-900/50 backdrop-blur-sm">
                                        <Play className="h-6 w-6 ml-1" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-xs font-mono">
                                    {sermon.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-xs font-semibold text-secondary-500 mb-2 uppercase tracking-wide">
                                    {sermon.date}
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-2 leading-tight group-hover:text-secondary-400 transition-colors">
                                    {sermon.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    by <span className="text-gray-300">{sermon.preacher}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestSermons
