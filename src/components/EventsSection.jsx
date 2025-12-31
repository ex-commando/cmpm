import { Calendar, MapPin, Clock } from 'lucide-react'

const events = [
    {
        id: 1,
        title: "Sunday Service",
        date: "Every Sunday",
        time: "8:30 AM",
        location: "CMPM HQ, Jos",
        description: "Join us for a time of intense worship, prophetic declarations, and the undiluted Word of God."
    },
    {
        id: 2,
        title: "Marathon Prayer",
        date: "Tuesdays",
        time: "4:30 PM",
        location: "CMPM HQ, Jos",
        description: "A time of intercession and spiritual warfare. Ignite your prayer life."
    },
    {
        id: 3,
        title: "Breakthrough Deliverance Service",
        date: "Saturdays",
        time: "7:00 AM",
        location: "CMPM HQ, Jos",
        description: "Experience total freedom and deliverance from every oppression of the enemy."
    }
]

const EventsSection = () => {
    return (
        <div className="py-20 bg-accent-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100 rounded-bl-full opacity-50 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary-600 font-bold tracking-widest uppercase text-sm mb-2 block font-heading">Mark Your Calendars</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">Upcoming Gatherings</h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-primary-600 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
                            <div className="p-8 flex-grow">
                                <div className="flex items-center gap-2 mb-4 text-secondary-600 font-semibold">
                                    <Calendar className="h-5 w-5" />
                                    <span>{event.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                                    {event.description}
                                </p>
                                <div className="space-y-2 text-sm text-gray-500 border-t border-gray-100 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-primary-500" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary-500" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EventsSection
