module.exports = function(app) {
  var express = require('express');
  var todosRouter = express.Router();

  todosRouter.get('/', function(req, res) {
    res.send({
      'todos': [{
        id:1,
        title:'Add to Orbit.JS Documentation',
        createdAt:new Date(2015, 1, 1),
        updatedAt:new Date(2015, 1, 2),
        dueDate:new Date(2016, 5, 5)
      }]
    });
  });

  todosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.put('/:id', function(req, res) {
    res.send({
      'todos': {
        id: req.params.id
      }
    });
  });

  todosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/1/todos', todosRouter);
};
