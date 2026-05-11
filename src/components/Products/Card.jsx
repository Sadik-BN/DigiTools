import { Check } from "lucide-react";

const Card = ({ product }) => {
    const tagColors = {
        "popular": { bg: "#FEF3C7", text: "#B45309" },
        "new": { bg: "#DBEAFE", text: "#1D4ED8" },
        "best-seller": { bg: "#DCFCE7", text: "#15803D" },
        "trending": { bg: "#EDE9FE", text: "#7C3AED" },
        "best-value": { bg: "#CCFBF1", text: "#0F766E" },
        "premium": { bg: "#FCE7F3", text: "#BE185D" },
    };
    const { bg, text } = tagColors[product.tagType];
    return (
        <div className="p-6 space-y-4 border border-gray-200 rounded-2xl">
            <div className="flex justify-end"><h1 className="px-3 rounded-3xl" style={{ backgroundColor: bg, color: text }}>{product.tag}</h1></div>
            <img src={product.icon} alt="icon" className="border border-gray-100 rounded-full p-2"/>
            <h1 className="text-[24px] font-bold">{product.name}</h1>
            <p className="text-[#627382]">{product.description}</p>
            <h1 className="text-[24px] font-bold">${product.price}<span className="text-[#627382] text-[16px] font-light">/Mo</span></h1>
            <ul>
                {
                    product.features.map((feature,idx)=>{

                        return(
                            <div key={idx} className="flex gap-2 space-y-2 text-[#627382]">
                                <Check color="#30B868"/>
                                <li>{feature}</li>
                            </div>
                        );
                    })
                }
            </ul>
            <button className="w-full btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl font-bold text-center py-3 px-4 flex-1">Buy Now</button>

        </div>
    );
};

export default Card;