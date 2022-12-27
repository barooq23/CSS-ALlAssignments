const authorController = require('../controllers/author.conroller');

module.exports = app => {
    app.post('/api/authors', authorController.createNewAuthor);
    app.get('/api/authors', authorController.getAllAuthors);
    app.get('/api/authors/:id', authorController.getOneAuthor);
    app.put('/api/authors/:id', authorController.updateAuthor);
    app.delete('/api/authors/:id', authorController.deleteAuthor);
}