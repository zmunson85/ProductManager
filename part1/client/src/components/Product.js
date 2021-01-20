import React, { useEffect, useState } from "react";
import Axios from "axios";

const Product = (props) => {

    const [product, setProduct] = useState(null);
    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
            })

    }, [props.id]);


    if (product === null) {
        return "There Are No Products To Display"
    }

    return (
        <div key={product._id} className="row mb-2 justify-content-center">
            <div className="col-md-7 p-2 shadow border rounded text-center">
                <h3>{product.title}</h3>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>


            </div>
        </div>
    );
};

export default Product;