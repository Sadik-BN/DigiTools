import CartCard from "./CartCard";

const Cart = ({ added, setAdded, tab, total, setTotal }) => {
    if (added.length === 0) {

        return (
            <>
                <div className={`flex flex-col items-center justify-center space-y-4 mb-11 container mx-auto px-10 ${tab === 2 ? "block" : "hidden"}`}>
                    <h1 className="text-3xl font-extrabold text-center">Your Cart is Empty</h1>
                    <p className="text-[#627382] text-center">Please add some items in your cart to proceed.</p>
                </div>
            </>
        );
    }
    return (
        <div className={`p-10 border border-gray-200 rounded-2xl container mx-auto px-10 space-y-6 ${tab === 2 ? "block" : "hidden"}`}>
            <h1 className="text-[24px] font-bold">Your Cart</h1>
            <div className="space-y-4">
                {
                    added.map((item,idx) => <CartCard key={idx} item={item} added={added} setAdded={setAdded} setTotal={setTotal} total={total}></CartCard>)
                }
            </div>
            <div className="flex justify-between">
                <p>Total:</p>
                <h3 className="text-[24px] font-bold">${total}</h3>
            </div>
            <button className="w-full btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl font-bold text-center py-3 px-4 flex-1">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;