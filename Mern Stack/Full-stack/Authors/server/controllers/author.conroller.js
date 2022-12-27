const Author = require('../models/author.model');

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(createdAuthor => res.json({ author: createdAuthor }))
        .catch(err => res.status(400).json({message: "something went wrong while creating an author", error: err }));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({authors: allAuthors}))
        .catch(err => res.json({message: "something went wrong while getting all Authors", error: err}));
}

module.exports.getOneAuthor = (req, res) => {
    Author.find({_id: req.params.id})
        .then(oneAuthor => res.json({author: oneAuthor}))
        .catch(err => res.json({message: "something went wrong while getting one author", error: err}));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json({author: updatedAuthor}))
        .catch(err => res.status(400).json({message: "something went wrong while updating one author", error: err}));
}

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "something went wrong while deleting one author", error: err}));
}