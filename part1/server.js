const port = 8000;
const cors = require("cors");
const  express = require ("express");

const products = "product-manager";

require("./server/config/mongoose.config");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

require("./server/routes/product-manager.routes")(app)

app.listen(port,()=>{
    console.log('Listen On Port ${port} for requests or respond to them')
})
