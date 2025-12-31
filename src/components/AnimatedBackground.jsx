import { Flame } from 'lucide-react'

const AnimatedBackground = () => {
    // Only Flame icons with different positions, sizes, and animation delays
    const icons = [
        { size: "h-32 w-32", color: "text-primary-100", top: "10%", left: "5%", delay: "delay-100" },
        { size: "h-48 w-48", color: "text-red-50", top: "20%", left: "80%", delay: "delay-300" },
        { size: "h-64 w-64", color: "text-primary-50", top: "50%", left: "10%", delay: "delay-500" },
        { size: "h-24 w-24", color: "text-red-100", top: "80%", left: "70%", delay: "delay-200" },
        { size: "h-40 w-40", color: "text-primary-50", top: "40%", left: "90%", delay: "delay-700" },
        { size: "h-36 w-36", color: "text-red-50", top: "15%", left: "40%", delay: "delay-200" },
        { size: "h-56 w-56", color: "text-primary-100", top: "75%", left: "40%", delay: "delay-100" },
        { size: "h-20 w-20", color: "text-red-100", top: "60%", left: "5%", delay: "delay-300" },
        { size: "h-32 w-32", color: "text-primary-50", top: "90%", left: "20%", delay: "delay-500" },
        { size: "h-64 w-64", color: "text-red-50", top: "5%", left: "60%", delay: "delay-700" },
        { size: "h-40 w-40", color: "text-primary-100", top: "35%", left: "25%", delay: "delay-300" },
    ]

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {icons.map((item, index) => (
                <div
                    key={index}
                    className={`absolute animate-float ${item.color} opacity-20 ${item.delay}`}
                    style={{ top: item.top, left: item.left }}
                >
                    <Flame className={item.size} />
                </div>
            ))}
        </div>
    )
}

export default AnimatedBackground
