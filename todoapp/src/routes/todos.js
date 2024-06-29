const express = require('express');
const TodosController = require('../controllers/todosController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, TodosController.create);
router.get('/', TodosController.getAll);
router.get('/:id', authMiddleware, TodosController.getById);
router.put('/:id', authMiddleware, TodosController.update);
router.delete('/:id', authMiddleware, TodosController.delete);

module.exports = router;
