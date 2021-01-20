const { response } = require("express");
const Product = require("../models/product-manager.model");

module.exports = {
    create: function (request, response) {
        console.log("did it work?", request.body);

        Product.create(request.body)
            .then((product) => {
                console.log("New Product Created:", product)
                response.json(product);
            })
            .catch((err) => {
                response.json(err);
            })
    },

    getAll(request, response) {
        console.log("Showing All Products");
        Product.find()
            .then((products) => {
                response.json(products);
            })
            .catch((err) => {
                response.json(err);
            })
    },

    getOne(request, response) {
        console.log("One Product Should Be Showing", "url params: ", request.params);

        Product.findById(request.params.id)
            .then((product) => {
                response.json(product);
            })
    },

    delete(request, response) {
        console.log("It has been Deleted!", "url params:", request.params);

        Product.findByIdAndDelete(request.params.id)
            .then((product) => {
                response.json(product);
            })
            .catch((err) => {
                response.json(err);
            })
    },

    update(request, response) {
        console.log("You should see an update", "url params: ", request.params);

        Product.findByIdAndUpdate(request.params.id, request.body, {
            runValidators: true,
            new: true
        })
            .then((product) => {
                response.json(product);
            })
            .catch((err) => {
                response.json(err);
            })
    }
}