// Import packages 
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// Declared port and route configuration
const PORT = process.env.PORT || 8080;
const routes = require("./routes/handlers");

// Configure packages
app.use(express.static(path.join(__dirname, '/public/')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use("/", routes);

// Configure express-handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/layouts')
    } ));
app.set('view engine', 'handlebars');

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/table', (req, res) => {
    res.render('table', { title: 'Table'})
});

// Store server
app.listen(PORT, () => {
    console.log(`OKAY, I'M LISTENING AT PORT: ${PORT} `);
});