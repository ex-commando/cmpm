import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Globe, Upload, Heart } from 'lucide-react'

const Contact = () => {
    const [activeTab, setActiveTab] = useState('prayer')
    const [fileName, setFileName] = useState('')
    const [fileError, setFileError] = useState('')

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB
                setFileError('File size exceeds 5MB')
                setFileName('')
                e.target.value = '' // Clear input
            } else {
                setFileError('')
                setFileName(file.name)
            }
        } else {
            setFileName('')
            setFileError('')
        }
    }

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
                                <p className="mt-1 text-gray-600">+234 703 508 4558</p>
                                <p className="text-gray-600">+234 706 847 3984</p>
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
                            {/* Tabs */}
                            <div className="flex border-b border-gray-200">
                                <button
                                    onClick={() => setActiveTab('prayer')}
                                    className={`flex-1 py-4 px-6 text-center text-sm font-medium transition-colors duration-200 focus:outline-none flex items-center justify-center gap-2 ${activeTab === 'prayer'
                                        ? 'border-b-2 border-primary-600 text-primary-600 bg-primary-50/50'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <Heart className="h-4 w-4" />
                                    Prayer Request
                                </button>
                                <button
                                    onClick={() => setActiveTab('donation')}
                                    className={`flex-1 py-4 px-6 text-center text-sm font-medium transition-colors duration-200 focus:outline-none flex items-center justify-center gap-2 ${activeTab === 'donation'
                                        ? 'border-b-2 border-primary-600 text-primary-600 bg-primary-50/50'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <Upload className="h-4 w-4" />
                                    Offering/Tithe/Donation Upload
                                </button>
                            </div>

                            <div className="px-6 py-8 sm:p-10">
                                {activeTab === 'prayer' ? (
                                    <form action="https://formsubmit.co/Adaoranasir@gmail.com" method="POST" className="grid grid-cols-1 gap-y-6 animate-fadeIn">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Prayer Request</h3>
                                        <input type="hidden" name="_subject" value="New Prayer Request from CMPM Website" />
                                        <input type="hidden" name="_template" value="table" />
                                        <input type="hidden" name="_captcha" value="false" />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="prayer-first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="first-name" id="prayer-first-name" autoComplete="given-name" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="prayer-last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="last-name" id="prayer-last-name" autoComplete="family-name" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="prayer-email" className="block text-sm font-medium text-gray-700">Email</label>
                                                <div className="mt-1">
                                                    <input type="email" name="email" id="prayer-email" autoComplete="email" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="prayer-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                                <div className="mt-1">
                                                    <input type="tel" name="phone" id="prayer-phone" autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="prayer-message" className="block text-sm font-medium text-gray-700">Prayer Request</label>
                                            <div className="mt-1">
                                                <textarea id="prayer-message" name="message" rows="4" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" placeholder="How can we pray for you?"></textarea>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" className="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-md text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all transform hover:-translate-y-0.5">
                                                Send Prayer Request
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <form action="https://formsubmit.co/Adaoranasir@gmail.com" method="POST" encType="multipart/form-data" className="grid grid-cols-1 gap-y-6 animate-fadeIn">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Proof of Payment</h3>
                                        <input type="hidden" name="_subject" value="New Donation Proof from CMPM Website" />
                                        <input type="hidden" name="_template" value="table" />
                                        <input type="hidden" name="_captcha" value="false" />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="donation-first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="first-name" id="donation-first-name" autoComplete="given-name" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="donation-last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="last-name" id="donation-last-name" autoComplete="family-name" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="donation-email" className="block text-sm font-medium text-gray-700">Email</label>
                                                <div className="mt-1">
                                                    <input type="email" name="email" id="donation-email" autoComplete="email" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="donation-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                                <div className="mt-1">
                                                    <input type="tel" name="phone" id="donation-phone" autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="donation-type" className="block text-sm font-medium text-gray-700">Type of Giving</label>
                                                <div className="mt-1">
                                                    <select id="donation-type" name="type" required className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors">
                                                        <option value="">Select an option</option>
                                                        <option value="Tithe">Tithe</option>
                                                        <option value="Offering">Offering</option>
                                                        <option value="Donation">Donation</option>
                                                        <option value="Seed Faith">Seed Faith</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount Sent</label>
                                                <div className="mt-1">
                                                    <input type="text" name="amount" id="amount" required placeholder="e.g. 5000" className="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-lg border bg-gray-50 focus:bg-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="proof" className="block text-sm font-medium text-gray-700">Upload Proof (Screenshot/Receipt)</label>
                                            <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-colors cursor-pointer ${fileError ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:bg-gray-50'}`}>
                                                <div className="space-y-1 text-center">
                                                    <Upload className={`mx-auto h-12 w-12 ${fileError ? 'text-red-400' : 'text-gray-400'}`} />
                                                    <div className="flex text-sm text-gray-600 justify-center">
                                                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                                            <span>{fileName || 'Upload a file'}</span>
                                                            <input id="file-upload" name="proof" type="file" className="sr-only" required accept="image/*,.pdf" onChange={handleFileChange} />
                                                        </label>
                                                        {!fileName && <p className="pl-1">or drag and drop</p>}
                                                    </div>
                                                    <p className={`text-xs ${fileError ? 'text-red-500' : 'text-gray-500'}`}>
                                                        {fileError || 'PNG, JPG, PDF up to 5MB'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button type="submit" className="w-full inline-flex justify-center py-4 px-6 border border-transparent shadow-md text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all transform hover:-translate-y-0.5">
                                                Submit Proof of Payment
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
