import React, { useState } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

const NewProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = e => {
        e.preventDefault();

        /*  */
        const newProduct = {
            title,
            price,
            description
        }

            //
        Axios.post("http://localhost:8000/api/products", newProduct)
            .then((res) => {

                navigate("/products");
            })
            .catch((err) => console.error(err))
    }// this is what

    return (
        //BOOTSTRAP FORM, I JUST CHANGED THE INPUT AND onSubmit/handleSubmit added some inline css...
        <div className="container text-center">
            <h1 style={{marginRight:"140px"}}> Product Manager</h1>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }}
            >
                <div className="form-group row" style={{ backgroundColor: "#f2f2f2", padding: "15px", width: "80%" }}>
                    <label className="col-sm-2 col-form-label text-left">Title</label>
                    <div className='col-sm-10'>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row" style={{ backgroundColor: "#f2f2f2", padding: "15px", width: "80%" }}>
                    <label className="col-sm-2 col-form-label text-left">Price</label>
                    <div className='col-sm-10'>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="form-group row" style={{ backgroundColor: "#f2f2f2", padding: "15px", width: "80%" }}>
                    <label className="col-sm-2 col-form-label text-left">Description </label>
                    <div className='col-sm-10'>
                        <textarea
                            type="textarea"
                            className="form-control"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <input style={{marginRight: "170px", width: "300px"}} type="submit" className="btn btn-light" value="Create New Product"/>
            </form>
        </div>
    )
};

export default NewProduct;