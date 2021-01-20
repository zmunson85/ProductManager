import React, { useEffect, useState } from "react";
import Axios from "axios";
import {Link, navigate} from "@reach/router"
// import bootstrap from "bootstrap";
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

    function handleDelete(delete_id) {
        Axios.delete(`http://localhost:8000/api/products/${delete_id}`)
            .then(res => {
                console.log("deleted product", res.data);
                navigate('/');
            })
            .catch(err => { console.error(err) })

    }

    if (product === null) {
        return "There Are No Products To Display"
    }

    return (

        
        <div  style={{width:"100%", marginLeft: "260px", marginTop:"150px"}} className="ProductContainer">
            <div key={product._id} className="col-sm-2 col-form-label"  >
                <div class="card-body">
                    <h5 style={{minWidth:"300px", fontSize: "45px", marginBottom: "35px"}} class="card-title">{product.title}</h5>
                    <h6 style={{fontSize: "25px"}} class="card-subtitle mb-2 text-muted">Price: ${product.price}</h6>
                    <p style={{fontSize:"20px", width: "200px", height: "100px", marginTop:"25px"}} class="card-text">Description:<br></br> {product.description}</p>
                    <div style={{display: "flex"}}>
                        <Link to={"/products/update/"+ product._id} style={{ fontSize: "25px", marginRight:"25px" }} class="card-link">Update</Link>
                        <button onClick={e => { handleDelete(product._id) }} style={{ fontSize: "25px" }}class="card-button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;