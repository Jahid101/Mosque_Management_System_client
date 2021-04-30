import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {

    const products = [
        {
            name: "Monitor",
            price: 550,
            img: "https://www.startech.com.bd/image/cache/catalog/monitor/xiaomi/redmi-34-curved/redmi-34-curved-500x500.jpg"
        }, {
            name: "Ram",
            price: 250,
            img: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-06-24-16-30/testing-4000mhz-ram-are-higher-frequencies-worth-it-part-one-intel-1593012641804.jpg/EG11/thumbnail/750x422/format/jpg/quality/60"
        }, {
            name: "HDD",
            price: 300,
            img: "https://media.startech.com/cms/products/main/25sat35hdd.main.jpg"
        }
    ]

    return (
        <div className="mt-5 productBg" id="product">
            <h1 className="text-center mb-3 text-light" style={{ color: 'black', fontSize: '55px' }}>Checkout Our Products</h1>
            <div className="row">
                {
                    products.map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Product;
