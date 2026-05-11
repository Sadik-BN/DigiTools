import { ShoppingCart } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex justify-between container mx-auto px-10"> 
                    <h1 className="text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">DigiTools</h1>

                    <ul className="lg:flex justify-center items-center gap-8 hidden">
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>

                    <div className="flex gap-4 justify-center items-center">

                        {/* cart */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <ShoppingCart></ShoppingCart>   
                                    <span className="badge badge-sm indicator-item text-white bg-red-700 rounded-full">8</span>
                                </div>
                            </div>
                            <div
                                tabIndex={0}
                                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                <div className="card-body">
                                    <span className="text-lg font-bold">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>Login</p>

                        <button className="btn text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl ">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;