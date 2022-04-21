const books = require("../models/books");

module.exports = {
    index: (req, res) => {
        books.find({})
            .then(booknum => {
                res.render("home", {
                    data: booknum
                })
            })
            .catch(error => {
                console.log(`Error Fetching books: ${error.message}`)
                res.redirect("/home");
            });
    },
    pagedelete: (req, res) => {
        books.find({})
            .then(booknum => {
                res.render("DeleteABook", {
                    data: booknum
                })
            })
            .catch(error => {
                console.log(`Error Fetching books: ${error.message}`)
                res.redirect("/home");
            });
    },
    new: (req, res) => {
        res.render("addNewBook");
    },
    sendReqcss: (req, res) => {
        res.sendFile(`./public/css/${req.url}.css`, {
            root: "./"
        })
    },
    create: (req, res, next) => {
        let bookParams = {
            name: req.body.name,
            author: req.body.author,
            link: req.body.link
        };
        books.create(bookParams)
            .then(user => {
                res.locals.redirect = "/home";
                res.locals.booknum;
                next();
            })
            .catch(error => {
                console.log(`Error Saving book: ${error.message}`);
                res.redirect("/home")
                // next(error);
            });
    },
    show: (req, res, next) => {
        let bookId = req.params.id;
        books.findById(bookId)
            .then(book => {
                res.render("books", {
                    data: book
                })            
            })
            .catch(error => {
                console.log(`error fetching book by name: ${error.message}`);
                next(error);
            });
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },
    delete: (req, res, next) => {
        let bookID = req.params.bookID;
        books.findOneAndDelete({name: bookID})
            .then(() => {
                res.locals.redirect = "/home";
                next();
            })
            .catch(error => {
                console.log(`Error deleting book: ${error.message}`);
                next();
            });
    }
};
