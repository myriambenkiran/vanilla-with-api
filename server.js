const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const { getNodeText } = require("@testing-library/react");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/vanilla-with-api-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

console.log(mongoose.connection.readyState);

var productSchema = new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name: { type: String },
    volume: { type: [String] },
    price: { type: Number },
    brand: { type: String },
    type: { type: String },
    info: { type: String },
    category: { type: [String] },
    src: { type: String }
})
const Product = mongoose.model(
    "products",
    productSchema
);

app.get("/api/products", function (req, res) {
    Product.find({}, function (err, products) {
        if (err) {
            res.send("something went wrong");
            return;
        };
        res.send(products);
    })
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));