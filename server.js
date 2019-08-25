let express = require('express');
let path = require('path');
let app = express();

const views_url= path.join(__dirname, "src");

let nunjucks = require('nunjucks');

nunjucks.configure(path.join(views_url), {
    autoescape: true,
    express: app,
    watch: true
});

app.set("views", views_url);

app.use("/resource/", express.static(path.join(__dirname, "src")))

app.get("/", function (req, res) {
    res.render("index.html", {list:[1,2,3,4]});
});

app.get("/products", function (req, res) {
    res.render("products.html", {list:[1,2,3,4]});
})

app.get("/products/:product", function (req, res) {
    res.render("product.html", {list:[1,2,3,4,5,6]});
});

app.get("/checkout", function (req, res) {
    res.render("checkout.html", {list:[1,2,3,4,5,6]});
});

app.get("/signup", function (req, res) {
    res.render("signup.html", {list:[1,2,3,4,5,6]});
});

app.get("/signin", function (req, res) {
    res.render("signin.html", {list:[1,2,3,4,5,6]});
});



app.get("/cart", function (req, res) {
    res.render("cart.html", {list:[1,2,3,4,5,6]});
});

app.listen(4100, function () {
    console.log("is listening");
});