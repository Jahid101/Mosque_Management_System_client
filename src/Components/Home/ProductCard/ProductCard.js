import React from 'react';
import '../Product/Product.css';

const ProductCard = ({product}) => {
    return (
        <div class="col-md-3 row container productCardInfo cardDesign mt-5 p-3 btn">
            <div>
                <img src={product.img} alt="" />
                <div>
                    <h3 className="text-center mt-4">{product.name}</h3>
                    <h6 className="mt-4">${product.price}</h6>
                    <button className="btn btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
