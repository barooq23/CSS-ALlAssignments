const playerController = require('../controllers/player.controller');

module.exports = app => {
    app.post('/api/players', playerController.createNewPlayer);
    app.get('/api/players', playerController.getAllPlayers);
    app.get('/api/players/:id', playerController.getOnePlayer);
    app.put('/api/players/:id', playerController.updatePlayer);
    app.delete('/api/players/:id', playerController.deletePlayer);
}