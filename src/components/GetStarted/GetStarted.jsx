
import user from '../../assets/user.png'
import pack from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

export default function GetStarted() {
    return (
        <div className="bg-gray-100 mt-16 py-30">
            <div className="px-10 container mx-auto">
                <div className="mb-12 flex flex-col">
                    <h2 className="text-center text-[48px] font-extrabold text-gray-900 mb-3">
                        Get Started In 3 Steps
                    </h2>
                    <p className="text-gray-400 text-center">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-7.5">

                    <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm h-95 w-95">
                        <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center">
                            01
                        </span>
                        <div className="bg-violet-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
                            <img src={user} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold mb-2">Create Account</h3>
                        <p className="text-gray-400 text-center">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>


                    <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm h-95 w-95">
                        <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center">
                            02
                        </span>
                        <div className="bg-violet-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
                            <img src={pack} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold mb-2">Choose Products</h3>
                        <p className="text-gray-400 text-center">
                            Browse our catalog and select the tools <br /> that fit your needs.
                        </p>
                    </div>


                    <div className="relative bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm h-95 w-95">
                        <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center">
                            03
                        </span>
                        <div className="bg-violet-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
                            <img src={rocket} alt="" />
                        </div>
                        <h3 className="text-[24px] font-bold mb-2">Start Creating</h3>
                        <p className="text-gray-400 text-center">
                            Download and start using your premium<br />tools immediately.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}