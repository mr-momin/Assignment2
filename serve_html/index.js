const mongoose = require('mongoose');
const bookcontroller = require('./controllers/bookcontroller');
require("dotenv").config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useUnifiedTopology: true }
);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

express = require("express");
app = express();
// homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit:'10mb', extended:false}))
const methodOverride = require("method-override");
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));

router = express.Router();
app.use("/", router);

app.get("/", function(req,res) {res.redirect("/home");});
app.use(express.static(__dirname + '/public'));
router.get("/image", bookcontroller.sendReqcss); 
router.get("/home", bookcontroller.index);
router.get("/books/:id", bookcontroller.show);
router.get("/DeleteABook", bookcontroller.pagedelete);
router.get("/addNewBook", bookcontroller.new);
router.post("/booknum/create", bookcontroller.create, bookcontroller.redirectView);
router.delete("/booknum/:bookID/delete", bookcontroller.delete, bookcontroller.redirectView);

app.listen(app.get("port"), () => {
    console.log(`The Express.js server has started and is listening on port number: ${app.get("port")}`);
});
