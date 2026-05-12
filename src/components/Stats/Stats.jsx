const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15">
            <div className="container mx-auto px-10 flex flex-col md:flex-row justify-center items-center">
                <div className="md:px-31 md:py-1 border-b md:border-r md:border-b-0 md:border-r-white border-b-white py-15">
                    <h1 className="text-white font-extrabold text-[60px] text-center">50k+</h1>
                    <p className="text-[24px] text-white text-center">Active Users</p>
                </div>
                <div className="md:px-31 md:py-1 py-15 border-b md:border-r md:border-b-0 md:border-r-white border-b-white">
                    <h1 className="text-white font-extrabold text-[60px] text-center">200+</h1>
                    <p className="text-[24px] text-white text-center">Premium Tools</p>
                </div>
                <div className="md:px-31 md:py-1 py-15">
                    <h1 className="text-white font-extrabold text-[60px] text-center">4.9</h1>
                    <p className="text-[24px] text-white text-center">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;