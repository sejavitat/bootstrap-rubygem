// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/partials"));

// use res.render to load up an ejs view file

// index
app.get('/', function(req, res) {
    res.render('pages/index', {
        page_name: 'index'
    });
});

// colors
app.get('/colors', function(req, res) {
    res.render('pages/colors', {
        page_name: 'colors'
    });
});

// buttons
app.get('/buttons', function(req, res) {
    res.render('pages/buttons', {
        page_name: 'buttons'
    });
});

// typography
app.get('/typography', function(req, res) {
    res.render('pages/typography', {
        page_name: 'typography'
    });
});

// buttons
app.get('/pills', function(req, res) {
    res.render('pages/pills', {
        page_name: 'pills'
    });
});

// cards
app.get('/cards', function(req, res) {
    res.render('pages/cards', {
        page_name: 'cards'
    });
});

// tabs
app.get('/tabs', function(req, res) {
    res.render('pages/tabs', {
        page_name: 'tabs'
    });
});

// steps
app.get('/steps', function(req, res) {
    res.render('pages/steps', {
        page_name: 'steps'
    });
});

// forms
app.get('/forms-text', function(req, res) {
    res.render('pages/forms-text', {
        page_name: 'forms-text'
    });
});
app.get('/forms-select', function(req, res) {
    res.render('pages/forms-select', {
        page_name: 'forms-select'
    });
});
app.get('/forms-checkbox', function(req, res) {
    res.render('pages/forms-checkbox', {
        page_name: 'forms-checkbox'
    });
});
app.get('/forms-radio', function(req, res) {
    res.render('pages/forms-radio', {
        page_name: 'forms-radio'
    });
});

// timeline
app.get('/timeline', function(req, res) {
    res.render('pages/timeline', {
        page_name: 'timeline'
    });
});

// modal
app.get('/modal', function(req, res) {
    res.render('pages/modal', {
        page_name: 'modal'
    });
});

// table
app.get('/table', function(req, res) {
    res.render('pages/table', {
        page_name: 'table'
    });
});

// VitScore
app.get('/VitScore', function(req, res) {
    res.render('pages/VitScore', {
        page_name: 'VitScore'
    });
});

// Switch
app.get('/switch', function(req, res) {
    res.render('pages/switch', {
        page_name: 'switch'
    });
});

// Alerts
app.get('/alerts', function(req, res) {
    res.render('pages/alerts', {
        page_name: 'alerts'
    });
});

// Counters
app.get('/counters', function(req, res) {
    res.render('pages/counters', {
        page_name: 'counters'
    });
});

app.listen(8080);
console.log('8080 is the port');