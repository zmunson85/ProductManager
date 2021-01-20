import React, { useEffect, useState } from "react";
import Axios from "axios";
import { navigate, Link } from "@reach/router";
import NewProduct from "../components/NewProduct";

const Products = (props) => {

    const [products, setProducts] = useState(null);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    function handleDelete(delete_id) {
        Axios.delete(`http://localhost:8000/api/products/${delete_id}`)
            .then(res => {
                console.log("deleted product", res.data);
                const filteredProducts = products.filter((product) => {
                    return product._id !== delete_id;
                }
                )
                setProducts(filteredProducts);
            })
            .catch(err => { console.error(err) })
    }
    
    if (products === null) {
        return "There Are No Products To Display"
    }
    return (
        <div className="container">
            <NewProduct />
            <hr />
            <h1 className="text-center">All Products</h1>
            {
                products.map((product) => {
                    return (
                        <div key={product._id} className="row mb-2 justify-content-center">
                            <div className="col-md-7 p-2 text-center">
                                <Link to={"/products/" + product._id}>{product.title}</Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Products;