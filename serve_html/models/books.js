const mongoose = require("mongoose");
const booksSchema = new mongoose.Schema({
    name: {type:String, unique:true},
    author: String,
    link: String
});
const books = mongoose.model("books", booksSchema);
module.exports = books;

books.create(
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        link: "https://www.amazon.ca/Kill-Mockingbird-Harper-Lee/dp/0446310786/ref=sr_1_1?keywords=to+kill+a+mockingbird&qid=1649475376&sprefix=to+%2Caps%2C87&sr=8-1"
    },
    {
        name: "The Kite Runner",
        author: "Khaled Hosseini",
        link: "https://www.amazon.ca/The-Kite-Runner/dp/3125738482/ref=sr_1_1?keywords=the+kite+runner&qid=1649475600&s=books&sprefix=the+kite%2Cstripbooks%2C109&sr=1-1"  
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        link: "https://www.amazon.ca/Harry-Potter-Sorcerers-Stone-Book/dp/B06Y2BSB9B/ref=sr_1_2?keywords=harry+potter&qid=1649475680&s=books&sprefix=harry%2Cstripbooks%2C86&sr=1-2"
    },
    function (error, savedDocument){
        if(error) 
            console.log("There is duplicate records.");
    }
);