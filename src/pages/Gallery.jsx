import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Image as ImageIcon, X } from 'lucide-react'
import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import aboutUs from '../assets/about_us.jpg'
import pastors from '../assets/pastors.jpg'

const galleryImages = [
    // Original 5
    { id: 1, src: gallery1, alt: "Worship Moment", size: "large" },
    { id: 2, src: gallery2, alt: "Choir Ministration", size: "normal" },
    { id: 3, src: gallery3, alt: "Prophetic Declaration", size: "normal" },
    { id: 4, src: gallery4, alt: "Service Atmosphere", size: "normal" },
    { id: 5, src: gallery5, alt: "Lead Pastor", size: "normal" },

    // Curated Additions
    { id: 6, src: pastors, alt: "Our Shepherds", size: "tall" },
    { id: 8, src: hero1, alt: "Prayer Session", size: "normal" },
    { id: 9, src: hero2, alt: "Worship Experience", size: "normal" },
    { id: 10, src: aboutUs, alt: "Community", size: "large" },
]

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)

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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px] grid-flow-dense">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(image)}
                            className={`relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer
                                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${image.size === 'wide' ? 'md:col-span-2' : ''}
                                ${image.size === 'tall' ? 'md:row-span-2' : ''}
                                ${image.size === 'normal' ? 'md:col-span-1 md:row-span-1' : ''}
                            `}
                            layoutId={`gallery-img-${image.id}`}
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <motion.div
                            layoutId={`gallery-img-${selectedImage.id}`}
                            className="relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center justify-center rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-center">
                                <h3 className="text-white text-xl font-bold font-heading">{selectedImage.alt}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Gallery
