const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokesController.findAlljokes);
  app.get("/api/jokes/:id", JokesController.findOneSingleJokes);
  app.put("/api/jokes/:id", JokesController.updateExistingJokes);
  app.post("/api/jokes", JokesController.createNewJokes);
  app.delete("/api/jokes/:id", JokesController.deleteAnExistingJokes);
};
