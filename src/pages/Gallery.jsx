import { motion } from 'framer-motion'
import { Sparkles, Image as ImageIcon } from 'lucide-react'
import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'

const galleryImages = [
    { id: 1, src: gallery1, alt: "Worship Moment", size: "large" }, // Spans 2 cols on large
    { id: 2, src: gallery2, alt: "Choir Ministration", size: "normal" },
    { id: 3, src: gallery3, alt: "Prophetic Declaration", size: "normal" },
    { id: 4, src: gallery4, alt: "Service Atmosphere", size: "wide" }, // Spans 2 cols
    { id: 5, src: gallery5, alt: "Lead Pastor", size: "tall" }, // Spans 2 rows
]

const Gallery = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Gallery Hero */}
            <div className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 to-gray-900"></div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-fade-in-up">
                        <ImageIcon className="h-4 w-4 text-secondary-400" />
                        <span className="text-xs font-bold text-secondary-200 tracking-wider uppercase">Visual Testimony</span>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow-lg font-heading">
                        Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Fire</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-xl mx-auto font-light">
                        Glimpses into the move of God at Christ Messengers Prophetic Ministry.
                    </p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer
                                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${image.size === 'wide' ? 'md:col-span-2' : ''}
                                ${image.size === 'tall' ? 'md:row-span-2' : ''}
                            `}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-secondary-400 font-bold uppercase tracking-wider text-xs mb-1">CMPM Gallery</p>
                                    <h3 className="text-white text-xl font-bold font-heading">{image.alt}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 italic flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary-400" />
                        Join us to experience this live
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Gallery
