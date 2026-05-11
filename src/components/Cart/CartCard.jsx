import { Bounce, toast } from "react-toastify";

const CartCard = ({ item, added, setAdded, total, setTotal }) => {
    const removeHandler = (item) => {
        let newAdded = added.filter(product => product !== item);
        setAdded(newAdded);
        setTotal(Number((total - item.price).toFixed(2)));
        toast('Item Removed', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    return (
        <div className="bg-[#F9FAFC] rounded-2xl p-5 md:flex justify-between items-center">
            <div className="flex gap-4">
                <img src={item.icon} alt="icon" className="border bg-white border-gray-100 rounded-full p-2" />
                <div>
                    <h3 className="text-[20px] font-semibold">{item.name}</h3>
                    <p className="text-[#627382]">${item.price}</p>
                </div>
            </div>
            <button onClick={() => { removeHandler(item) }} className="btn btn-ghost rounded-2xl text-red-700">Remove</button>

        </div>
    );
};

export default CartCard;