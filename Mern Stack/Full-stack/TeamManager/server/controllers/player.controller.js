const Player = require('../models/player.model');

module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
        .then(createdPlayer => res.json({ player: createdPlayer }))
        .catch(err => res.status(400).json({message: "something went wrong while creating an player", error: err }));
}

module.exports.getAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({players: allPlayers}))
        .catch(err => res.json({message: "something went wrong while getting all Players", error: err}));
}

module.exports.getOnePlayer = (req, res) => {
    Player.find({_id: req.params.id})
        .then(onePlayer => res.json({player: onePlayer}))
        .catch(err => res.json({message: "something went wrong while getting one player", error: err}));
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedPlayer => res.json({player: updatedPlayer}))
        .catch(err => res.status(400).json({message: "something went wrong while updating one player", error: err}));
}

module.exports.deletePlayer = (req, res) => {
    Player.findOneAndDelete({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "something went wrong while deleting one player", error: err}));
}