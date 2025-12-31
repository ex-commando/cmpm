import { Play } from 'lucide-react';

const YouTubeLive = () => {
    // Placeholder video ID for "Live" feel. Replace with actual channel Live ID or specific video.
    // Using a generic worship/church background video id for demo purposes if strictly needed,
    // but for now, we'll use a placeholder structure or a specific video that looks like a broadcast.
    const videoId = "M7lc1UVf-VE"; // Example YouTube Video ID (Google Developers) - replace with client's.

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 uppercase tracking-widest mb-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
                        Live Broadcast
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Join Our Service Live
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Can't make it in person? Connect with us online and experience the presence of God from wherever you are.
                    </p>
                </div>

                <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1&rel=0`}
                        title="Live Service Broadcast"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-8 text-center">
                    <button className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                        <Play className="h-5 w-5 mr-2" />
                        View Past Sermons Archive
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YouTubeLive;
