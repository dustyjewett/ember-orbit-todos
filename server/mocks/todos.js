var _ = require('lodash');
module.exports = function(app) {

  // This is an important bit. Orbit's JSONSource uses a different mime type,
  // which may not be parsed by your backend-of-choice
  app.use(require('body-parser').json({
    type:'application/vnd.api+json'
  }));

  var express = require('express');
  var todosRouter = express.Router();

  var todoMockDatabase = {
    "1":{
      id:"1",
      title:'Add to Orbit.JS Documentation',
      createdAt:new Date(2015, 1, 1),
      updatedAt:new Date(2015, 1, 2),
      deletedAt:undefined,
      dueDate:new Date(2016, 5, 5)
  }};

  todosRouter.get('/', function(req, res) {
    res.send({
      'todos': _.values(todoMockDatabase)
    });
  });

  todosRouter.post('/', function(req, res) {
    item = req.body.todos;
    item.createdAt = new Date();
    item.updatedAt = new Date();

    res.status(201).send({"todos":item});
  });

  todosRouter.get('/:id', function(req, res) {
    res.send({
      'todos': todoMockDatabase[req.params.id]
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
