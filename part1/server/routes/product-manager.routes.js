const productController = require("../controllers/product-manager.controller");

module.exports = (app)=>{
    app.post("/api/products", productController.create);
    app.get("/api/products", productController.getAll);
    app.get("/api/products/:id", productController.getOne);
    app.delete("/api/products/:id", productController.delete);
    app.put("/api/products/:id", productController.update);
}
