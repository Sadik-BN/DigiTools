import { use } from "react";
import Card from "./Card";

const Products = ({ dataPromise, added, setAdded, tab, total, setTotal }) => {
    const axiosData = use(dataPromise);
    const productData = axiosData.data;
    return (
        <div className={`${tab === 1 ? "grid" : "hidden"} md:grid-cols-3 grid-cols-1 gap-8`}>
            {
                productData.map(product => <Card key={product.id} product={product} added={added} setAdded={setAdded} total={total} setTotal={setTotal}></Card>)
            }
        </div>
    );
};

export default Products;