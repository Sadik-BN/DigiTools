import group5 from '../../assets/Group5.png'
import banner from '../../assets/banner.png'
import play from '../../assets/Play.png'
const Banner = () => {
    return (
        <div className='container mx-auto px-10 py-21.25'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8'>
                <div className='flex flex-col items-start justify-center gap-4'>
                    <div className='flex gap-1 justify-center items-center bg-[#E1E7FF] rounded-3xl p-1 px-3'>
                        <img src={group5} alt="" />
                        <p className='text-[#9514FA]'> New: AI-Powered Tools Available </p>
                    </div>
                    <h1 className='font-extrabold text-[72px]'>Supercharge Your <br />Digital Workflow</h1>
                    <p className='text-[18px] text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div className='flex justify-center items-center gap-3 mt-4'>
                        <button className='btn btn-primary rounded-3xl text-white'>Explore Products</button>
                        <button className='btn btn-primary btn-outline rounded-3xl text-[#9514FA]'><img src={play} alt="" /> Watch Demo</button>
                    </div>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;