const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product title is required"],
            minlength: [2, "Product title must be at least 2 characters in length"]
        },
        price: {
            type: Number,
            required: [true, "Product price is required"],
            min: [0.01, "Product price cannot be $0"]
        },
        description: {
            type: String,
            required: [true, "Product description is required"],
            minlength: [3, "Product description must be at least 3 characters in length"]
        }
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
















// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         require: [true, "{PATH} is required."],
//         minlength: [3, "{PATH} must be at least {minLength} characters"]
//     },
//     price: {
//         type: Number,
//         required: [true, "{PATH}is required."],
//         minlength: [3, "{PATH} must be at least {minLength} characters"]
//     },
//     description: {
//         type: String,
//         required: [true, "{PATH} is required."],
//         minlength: [3, "{PATH} must be at least {minLength} characters"]
//     }
// },
//     { timestamps: true }
// );

// const Product = mongoose.model("Product", ProductSchema);

// module.exports = Product;
