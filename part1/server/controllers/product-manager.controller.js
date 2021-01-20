const { response } = require("express");
const Product = require("../models/product-manager.model");

module.exports = {
    create: function (request, response) {
        console.log("create method executed", request.body);

        Product.create(request.body)
            .then((product) => {
                console.log("product created:", product)
                response.json(product);
            })
            .catch((err) => {
                response.json(err);
            })
    },

    getAll(request, response) {
        console.log("getAll method executed");
        Product.find()
            .then((products) => {
                response.json(products);
            })
            .catch((err) => {
                response.json(err);
            })
    },

    getOne(request, response) {
        console.log("getOne method executed", "url params: ", request.params);

        Product.findById(request.params.id)
            .then((product) => {
                response.json(product);
            })
    },

    delete(request, response) {
        console.log("delete method executed", "url params:", request.params);

        Product.findByIdAndDelete(request.params.id)
            .then((product) => {
                response.json(product);
            })
            .catch((err) => {
                response.json(err);
            })
    },

    update(request, response) {
        console.log("update methond executed", "url params: ", request.params);

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