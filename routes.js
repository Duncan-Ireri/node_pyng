let router = require('express').Router();
const Quote = require('./models');


router.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

router.get('/', (req, res) => {
    res.json({
        status: 'API working',
        message: 'Welcome to quote central',
    });
});

router.post('/save', (req, res) => {
    Quote.create(req.body, (error, quote) => [
        res.redirect('/api/quotes')
    ])
});


// Import contact controller
var quotesController = require('./quotesController');
// Contact routes
router.route('/quotes')
    .get(quotesController.index)
    .post(quotesController.new);
router.route('/quotes/:quote_id')
    .get(quotesController.view)
    .patch(quotesController.update)
    .put(quotesController.update)
    .delete(quotesController.delete);

module.exports = router;