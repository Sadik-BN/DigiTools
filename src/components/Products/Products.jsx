import { use } from "react";
import Card from "./Card";

const Products = ({dataPromise}) => {
    const productData = use(dataPromise);
    return (
        <div className="container mx-auto px-10 grid md:grid-cols-3 grid-cols-1 gap-8">
            {
                productData.map(product=> <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default Products;