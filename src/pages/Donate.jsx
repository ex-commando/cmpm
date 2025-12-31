import { useState } from 'react'
import { Heart, CreditCard, Landmark, Copy, Check, Bitcoin, Banknote } from 'lucide-react'

const Donate = () => {
    const [copied, setCopied] = useState(false)
    const [activeTab, setActiveTab] = useState('NGN')

    const accounts = {
        NGN: {
            currency: 'Naira Account',
            bank: 'First Bank',
            name: 'Christ Messengers Prophetic Ministry',
            number: '2033033502',
            amount: 'Naira (NGN)',
            icon: <Banknote className="w-6 h-6 text-green-600" />
        },
        USD: {
            currency: 'Dollar Account',
            bank: 'GT Bank',
            name: 'Christ Messengers Prophetic Ministry',
            number: '0000000000',
            amount: 'US Dollar (USD)',
            icon: <p className="font-bold text-green-600 text-xl">$</p>
        },
        EUR: {
            currency: 'Euro Account',
            bank: 'GT Bank',
            name: 'Christ Messengers Prophetic Ministry',
            number: '0000000000',
            amount: 'Euro (EUR)',
            icon: <p className="font-bold text-blue-600 text-xl">€</p>
        },
        GBP: {
            currency: 'Pounds Account',
            bank: 'GT Bank',
            name: 'Christ Messengers Prophetic Ministry',
            number: '0000000000',
            amount: 'British Pound (GBP)',
            icon: <p className="font-bold text-purple-600 text-xl">£</p>
        },
        CRYPTO: {
            currency: 'Crypto Wallet',
            bank: 'USDT (TRC20)',
            name: 'CMPM Wallet',
            number: '0x000000000000000000000000000',
            amount: 'Crypto (USDT)',
            icon: <Bitcoin className="w-6 h-6 text-orange-500" />
        }
    }

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="min-h-screen bg-gray-900 py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-pulse-slow z-0"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000 z-0"></div>


            <div className="relative z-10 max-w-7xl w-full mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">Partner With Us</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">Your generosity empowers the gospel to reach the ends of the earth.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Card 1: Why Give */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                        <div className="absolute -top-10 -right-10 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                            <Heart className="w-80 h-80 text-white" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-300 font-semibold text-xs uppercase tracking-widest mb-8 border border-primary-500/20">
                                    <Heart className="w-3 h-3" />
                                    <span>The Blessing</span>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-8">Why We Give</h2>

                                <blockquote className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed italic mb-8 border-l-4 border-primary-500 pl-6 bg-gradient-to-r from-white/5 to-transparent p-4 rounded-r-xl">
                                    "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
                                </blockquote>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-primary-400 font-bold tracking-wide uppercase text-sm mb-2">Luke 6:38</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Your support takes the message of Christ to the nations, supports the widows and orphans, and builds the Kingdom of God.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Ways to Give */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 h-full relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary-500 to-primary-500"></div>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <CreditCard className="w-6 h-6 text-gray-900" />
                            </div>
                            Ways To Give
                        </h2>

                        {/* Currency Tabs */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {Object.keys(accounts).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === key
                                            ? 'bg-gray-900 text-white border-gray-900 shadow-lg scale-105'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    {key === 'CRYPTO' ? 'Crypto' : key}
                                </button>
                            ))}
                        </div>

                        {/* Account Details Display */}
                        <div className="flex-1 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-secondary-200 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Landmark className="w-32 h-32 text-gray-900" />
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-white shadow-md rounded-2xl text-secondary-600 border border-gray-100 font-bold text-xl flex items-center justify-center w-16 h-16">
                                        {accounts[activeTab].icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{accounts[activeTab].currency}</h3>
                                        <p className="text-sm text-gray-500">{accounts[activeTab].amount}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                                            {activeTab === 'CRYPTO' ? 'Network' : 'Bank Name'}
                                        </p>
                                        <p className="text-gray-900 font-bold text-lg">{accounts[activeTab].bank}</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                                            {activeTab === 'CRYPTO' ? 'Wallet Name' : 'Account Name'}
                                        </p>
                                        <p className="text-gray-900 font-semibold truncate" title={accounts[activeTab].name}>
                                            {accounts[activeTab].name}
                                        </p>
                                    </div>

                                    <div
                                        onClick={() => handleCopy(accounts[activeTab].number)}
                                        className="relative flex items-center justify-between bg-white border-2 border-dashed border-gray-300 rounded-xl p-4 cursor-pointer hover:border-secondary-500 hover:bg-secondary-50 transition-all group/copy"
                                    >
                                        <div className="min-w-0 pr-4">
                                            <p className="text-[10px] uppercase tracking-bold text-gray-400 mb-1">
                                                {activeTab === 'CRYPTO' ? 'Wallet Address' : 'Account Number'}
                                            </p>
                                            <p className="text-xl md:text-2xl font-mono font-bold text-gray-900 tracking-wider group-hover/copy:text-secondary-700 transition-colors truncate">
                                                {accounts[activeTab].number}
                                            </p>
                                        </div>
                                        <div className="p-2 bg-gray-100 rounded-lg group-hover/copy:bg-white group-hover/copy:text-secondary-600 transition-colors shadow-sm shrink-0">
                                            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                        </div>
                                        {copied && (
                                            <div className="absolute -top-3 right-0 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm animate-bounce">
                                                Copied!
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Donate
