import { Suspense, useState } from "react";
import Products from "../Products/Products";

const DigiTools = ({ dataPromise, added, setAdded }) => {
    const [tab,setTab] = useState(1);
    const products =()=>{
        setTab(1);
    }
    const cart = ()=>{
        setTab(2);
    }
    return (
        <div className="container mx-auto px-10">

            <div className="flex flex-col items-center justify-center space-y-4 mb-11">
                <h1 className="text-[48px] font-extrabold">Premium Digital Tools</h1>
                <p className="text-[#627382] text-center">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="space-x-4">
                    <button onClick={products} className={`btn rounded-3xl py-3.5 px-4 ${tab==1?"text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]":"text-[#25065D] btn-ghost"}`}>Products</button>
                    <button onClick={cart} className={`btn rounded-3xl py-3.5 px-4 ${tab==2?"text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]":"text-[#25065D] btn-ghost"}`}>Cart ({added.length})</button>
                </div>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-spinner loading-xl"></span></div>}>
                <Products added={added} setAdded={setAdded} dataPromise={dataPromise} tab={tab}></Products>
            </Suspense>
        </div>
    );
};

export default DigiTools;