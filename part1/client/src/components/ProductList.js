import React, { useEffect, useState } from "react";
import Axios from "axios";
import { navigate, Link } from "@reach/router";
import NewProduct from "../components/NewProduct";

const ProductList = (props) => {

    const [productList, setProductList] = useState(null);
    useEffect(() => {
        Axios.get("http://localhost:8000/api/productList")
            .then((res) => {
                console.log(res);
                setProductList(res.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);
    function handleDelete(delete_id) {
        Axios.delete(`http://localhost:8000/api/productList/${delete_id}`)
            .then(res => {
                console.log("deleted product", res.data);
                const filteredProductList = productList.filter((product) => {
                    return product._id !== delete_id;
                }
                )
                setProductList(filteredProductList);
            })
            .catch(err => { console.error(err) })
    }
    
    if (productList === null) {
        return "There Are No Products To Display"
    }
    return (
        <div className="container">
            <NewProduct />
            <hr /> {/* this adds a solid line seperation between input and output */}
            <h1 className="text-center">Select A Product</h1>
    
            {
                productList.map((product) => {
                    return (
                        <div key={product._id} className="row mb-2 justify-content-center">
                            <div className="col-lg-7 p-2 text-center">
                                <Link style={{fontSize:"25px"}} className="text-center" to={"/productList/" + product._id}>{product.title}</Link>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ProductList;
