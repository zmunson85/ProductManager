import React, { useEffect, useState } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

const Update = (props) => {
    console.log("these are the existing props:", props)
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const [description, setDescription] = useState(props.description);

    const [product, setProduct] = useState(props);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/products/${product.id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
            })

    }, []);

    const handleSubmit = e => {
        console.log("hello")
        e.preventDefault();
        const updateProduct = {
            title: title,
            price: price,
            description: description
        }
        Axios.put(`http://localhost:8000/api/products/${product._id}`, updateProduct)
            .then((res) => {
                navigate("/products");
            })
            .catch((err) => console.error(err))
    }


    /* for the update I will need to add everthing the same as a new product,
    so all the fields can be updated after changes are made, 
    on submit will redirect to that product when update is complete */
    /* I WILL USE BOOTSTRAP FORM AGAIN */
    return (
        <div className="container text-center">
            <h3>Update</h3>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }}
            >
                <div className="form-group row" style={{ backgroundColor: "#f2f2f2", padding: "12px" }}>
                    <label className="col-lg-2 col-form-label text-left">Title: </label>
                    <div className='col-lg-10'>
                        <input
                            type="text"
                            placeholder={product.title}
                            className="form-control"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row" style={{ backgroundColor: "#f2f2f2", padding: "12px" }}>
                    <label className="col-lg-2 col-form-label text-left">Price: </label>
                    
                    <div className='col-lg-10'>
                        <input
                            type="text"
                            placeholder={product.price}
                            className="form-control"
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row" style={{ backgroundColor: "#f2f2f2", padding: "12px" }}>
                    <label className="col-lg-2 col-form-label text-left">Description: </label>
                    <div className='col-lg-10'>
                        <textarea
                            type="textarea"
                            placeholder={product.description}
                            className="form-control"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <input style={{fontSize:"25px"}} type="submit" className="btn btn-light" value="Update Product" />
            </form>
        </div>
    )
};

export default Update;