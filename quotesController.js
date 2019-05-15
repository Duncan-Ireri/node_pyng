Quote = require('./models');

exports.index = (req, res) => {
    Quote.get(function(err, quotes){
        if(err) {
            res.json({
                status: 'error',
                message: err,
            });
        }
        res.json({
            status: 'Success',
            message: 'Quotes recieved',
            data: quotes
        });
    });
};

exports.new = (req, res) =>{
    var quote = new Quote();
    quote.name = req.body.name ? req.body.name : quote.name;
    quote.quote = req.body.quote;

    quote.save(function(err){
        if (err){
            res.json(err)
        }
        res.json({
            message: 'New quote added',
            data: quote,
        });
    });
};


// Handle view contact info
exports.view = function (req, res) {
    Quote.findById(req.params.quote_id, function (err, quote) {
        if (err)
            res.send(err);
        res.json({
            message: 'Quote details loading..',
            data: quote
        });
    });
};

// Handle update quote info
exports.update = function (req, res) {
    Quote.findById(req.params.quote_id, function (err, quote) {
            if (err)
                res.send(err);
    quote.name = req.body.name ? req.body.name : quote.name;
    quote.quote = req.body.quote;
    // save the contact and check for errors
            quote.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Quote Info updated',
                    data: quote
                });
            });
        });
    };
    // Handle delete quote
    exports.delete = function (req, res) {
        Quote.remove({
            _id: req.params.quote_id
        }, function (err, quote) {
            if (err)
                res.send(err);
    res.json({
                status: "success",
                message: 'Quote deleted'
            });
        });
    };