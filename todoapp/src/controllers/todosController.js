const { Todo } = require('../models/Todo');
const NaoEncontrado = require('../errors/NaoEncontrado');

class TodosController {
  static async create(req, res, next) {
    try {
      const { title, description, completed } = req.body;
      const newTodo = await Todo.create({ title, description, completed });
      res.status(201).json(newTodo);
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req, res, next) {
    try {
      const todos = await Todo.findAll();
      res.status(200).json(todos);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const todo = await Todo.findByPk(req.params.id);
      if (!todo) {
        throw new NaoEncontrado('Tarefa não encontrada');
      }
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { title, description, completed } = req.body;
      const todo = await Todo.findByPk(req.params.id);
      if (!todo) {
        throw new NaoEncontrado('Tarefa não encontrada');
      }
      todo.title = title;
      todo.description = description;
      todo.completed = completed;
      await todo.save();
      res.status(200).json(todo);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const todo = await Todo.findByPk(req.params.id);
      if (!todo) {
        throw new NaoEncontrado('Tarefa não encontrada');
      }
      await todo.destroy();
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TodosController;
