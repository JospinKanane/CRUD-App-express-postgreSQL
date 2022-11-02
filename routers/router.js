const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/', controller.getStudents);
router.post('/', controller.addStudents);
router.get('/:id', controller.getStudentsById);
router.put('/:id', controller.updateStudent);
router.delete('/:id', controller.deleteStudent);


module.exports = router;