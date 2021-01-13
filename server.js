const express = require('express');
const app = express();
const expbs = require('express-handlebars');

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');

// Routing
app.get('', (req, res) => {
    res.render('index');
})

app.listen(8080, () => {
    console.log('SERVER IS STARTING AT PORT ', 8080);
});