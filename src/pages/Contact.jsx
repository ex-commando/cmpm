import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-gray-900 opacity-90"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-shadow-lg">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-xl text-primary-100 max-w-xl mx-auto">
                        We are here for you. Reach out for prayer, counseling, or inquiries.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Address Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-start space-x-4 border-l-4 border-primary-500">
                            <div className="bg-primary-50 p-3 rounded-full shrink-0">
                                <MapPin className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Visit Us</h3>
                                <p className="mt-1 text-gray-600">Angwan Jarawa, Jos north, Plateau state Nigeria</p>
                                <p className="text-sm text-gray-400 mt-2">Headquarters</p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-start space-x-4 border-l-4 border-secondary-500">
                            <div className="bg-secondary-50 p-3 rounded-full shrink-0">
                                <Phone className="h-6 w-6 text-secondary-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                                <p className="mt-1 text-gray-600">+234 123 456 7890</p>
                                <p className="text-sm text-gray-400 mt-2">Mon - Fri, 9am - 5pm</p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-start space-x-4 border-l-4 border-green-500">
                            <div className="bg-green-50 p-3 rounded-full shrink-0">
                                <Mail className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                                <p className="mt-1 text-gray-600">info@cmpm.org</p>
                                <p className="text-sm text-gray-400 mt-2">Send us your prayer requests</p>
                            </div>
                        </div>

                        {/* Website Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex items-start space-x-4 border-l-4 border-purple-500">
                            <div className="bg-purple-50 p-3 rounded-full shrink-0">
                                <Globe className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Online</h3>
                                <p className="mt-1 text-gray-600">cmpm.org</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-8 sm:p-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                                <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                            <div className="mt-1">
                                                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                            <div className="mt-1">
                                                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <div className="mt-1">
                                            <input type="email" name="email" id="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <div className="mt-1">
                                            <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" placeholder="How can we pray for you?"></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-md text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all transform hover:-translate-y-0.5">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
