import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <div className="mt-30 px-10 container mx-auto">

            <div className="mb-10 flex flex-col justify-center items-center">
                <h2 className="text-center text-[48px] font-extrabold mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-500 text-center">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-7.5">


                <div className="bg-[#F9FAFC] rounded-2xl p-8 flex flex-col w-95 shadow-2xl">
                    <h3 className="text-[24px] font-bold mb-1">Starter</h3>
                    <p className="text-gray-400 mb-6">Perfect for getting started</p>
                    <div className="mb-6">
                        <span className="text-[40px] font-bold">$0</span>
                        <span className="text-gray-400 text-[20px]">/Month</span>
                    </div>
                    <ul className="flex flex-col gap-3 mb-auto">
                        <li className="flex items-center gap-2 text-[#627382]">
                            <Check color="#30B868" /> Access to 10 free tools
                        </li>
                        <li className="flex items-center gap-2 text-[#627382]">
                            <Check color="#30B868" /> Basic templates
                        </li>
                        <li className="flex items-center gap-2 text-[#627382]">
                            <Check color="#30B868" /> Community support
                        </li>
                        <li className="flex items-center gap-2 text-[#627382]">
                            <Check color="#30B868" /> 1 project per month
                        </li>
                    </ul>
                    <button className="btn btn-primary mt-6 w-full text-white font-bold py-3 rounded-full">
                        Get Started Free
                    </button>
                </div>


                <div className="relative bg-linear-to-b from-[#4F39F6] to-[#9514FA] rounded-2xl p-8 flex flex-col w-95 shadow-2xl">
                    <div className="absolute -top-4 left-33  bg-yellow-200 text-yellow-800 text-xs font-semibold px-4 py-1.5 rounded-full">
                        Most Popular
                    </div>
                    <h3 className="text-[24px] font-bold text-white mb-1">Pro</h3>
                    <p className="text-violet-200 mb-6">Best for professionals</p>
                    <div className="mb-6">
                        <span className="text-[40px] font-bold text-white">$29</span>
                        <span className="text-violet-200">/Month</span>
                    </div>
                    <ul className="flex flex-col gap-3 mb-auto">
                        <li className="flex items-center gap-2 text-white">
                            <Check color="#30B868" /> Access to all premium tools
                        </li>
                        <li className="flex items-center gap-2 text-white">
                            <Check color="#30B868" /> Unlimited templates
                        </li>
                        <li className="flex items-center gap-2 text-white">
                            <Check color="#30B868" /> Priority support
                        </li>
                        <li className="flex items-center gap-2 text-white">
                            <Check color="#30B868" /> Unlimited projects
                        </li>
                        <li className="flex items-center gap-2 text-white">
                            <Check color="#30B868" /> Cloud sync
                        </li>
                        <li className="flex items-center gap-2 text-white">
                            <Check color="#30B868" /> Advanced analytics
                        </li>
                    </ul>
                    <button className="btn mt-6 w-full bg-white text-violet-600 font-bold py-3 rounded-full">
                        Start Pro Trial
                    </button>
                </div>


                <div className="bg-[#F9FAFC] rounded-2xl p-8 flex flex-col w-95 shadow-2xl">
                    <h3 className="text-[24px] font-bold mb-1">Enterprise</h3>
                    <p className="text-gray-400 mb-6">For teams and businesses</p>
                    <div className="mb-6">
                        <span className="text-[40px] font-bold text-gray-900">$99</span>
                        <span className="text-gray-400">/Month</span>
                    </div>
                    <ul className="flex flex-col gap-3 mb-auto">
                        <li className="flex items-center gap-2 text-gray-700">
                            <Check color="#30B868" /> Everything in Pro
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <Check color="#30B868" /> Team collaboration
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <Check color="#30B868" /> Custom integrations
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <Check color="#30B868" /> Dedicated support
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <Check color="#30B868" /> SLA guarantee
                        </li>
                        <li className="flex items-center gap-2 text-gray-700">
                            <Check color="#30B868" /> Custom branding
                        </li>
                    </ul>
                    <button className="btn btn-primary mt-6 w-full text-white font-bold py-3 rounded-full">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>

    );
}