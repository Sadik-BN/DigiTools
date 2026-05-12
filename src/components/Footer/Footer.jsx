import insta from '../../assets/Instagram.png'
import fb from '../../assets/Facebook.png'
import tweet from '../../assets/Twitter.png'
const Footer = () => {
    return (
        <div className="bg-[#101727] mt-30 pt-30">
            <div className="container mx-auto py-10">
                <div className="pb-20 border-b border-b-gray-200 flex md:flex-row md:justify-between justify-center items-center flex-col space-y-10 md:space-y-0">
                    <div>
                        <h3 className="text-[32px] text-center md:text-left font-extrabold text-white mb-4">DigiTools</h3>
                        <p className="text-gray-400 font-extralight text-center md:text-left">Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>
                    <ul className="space-y-4">
                        <li className="text-white font-bold"> Product </li>
                        <li className="text-gray-400 font-extralight"> Features </li>
                        <li className="text-gray-400 font-extralight">Pricing</li>
                        <li className="text-gray-400 font-extralight">Templates</li>
                        <li className="text-gray-400 font-extralight">Integrations</li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="text-white font-bold"> Company </li>
                        <li className="text-gray-400 font-extralight"> About </li>
                        <li className="text-gray-400 font-extralight">Blog</li>
                        <li className="text-gray-400 font-extralight">Careers</li>
                        <li className="text-gray-400 font-extralight">Press</li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="text-white font-bold"> Resources </li>
                        <li className="text-gray-400 font-extralight"> Documentation </li>
                        <li className="text-gray-400 font-extralight">Help Center</li>
                        <li className="text-gray-400 font-extralight">Community</li>
                        <li className="text-gray-400 font-extralight">Contact</li>
                    </ul>
                    <div>
                        <p className="text-white font-bold text-[16px] mb-4">Social Links</p>
                        <div className='flex gap-2'>
                            <img src={insta} alt="" />
                            <img src={fb} alt="" />
                            <img src={tweet} alt="" />
                        </div>
                    </div>
                </div>

                <div className='pt-7.5 flex md:justify-between md:flex-row flex-col-reverse justify-center items-center'>
                    <p className="text-gray-600 font-extralight">© 2026 Digitools. All rights reserved.</p>
                    <ul className='flex gap-4'>
                        <li className="text-gray-600 font-extralight">Privacy Policy</li>
                        <li className="text-gray-600 font-extralight">Terms of Service</li>
                        <li className="text-gray-600 font-extralight">Cookies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;