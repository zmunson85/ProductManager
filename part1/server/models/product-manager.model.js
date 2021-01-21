const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "You Need To Enter A Product Title!"],
            minLength: [2, "Product title must be at least 2 characters in length"]
        },
        price: {
            type: Number,
            required: [true, "You Must Enter A Number"],
            min: [0, "You must type a Number"],
            max: [99999, "Value Is Too High"]
        },
        description: {
            type: String,
            required: [true, "Product description is required"],
            minLength: [3, "Product description must be at least 3 characters in length"]
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
