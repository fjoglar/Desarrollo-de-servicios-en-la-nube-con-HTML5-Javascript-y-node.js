var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz MiriadaX' });
});

/* Autoload. */
router.param( 'quizId', quizController.load);

/* GET question and answer pages. */
router.get('/quizes',                       quizController.index);
router.get('/quizes/:quizId(\\d+)',         quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',  quizController.answer);
router.get('/quizes/new',                   quizController.new);
router.post('/quizes/create',               quizController.create);

/* GET author page. */
router.get('/author', function(req, res) {
  res.render('author');
});

module.exports = router;
