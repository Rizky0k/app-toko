const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require("path")
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render('index', {
        title: 'tabel',
        layout: 'layout/main-layout'
    })
})

app.get("/create", (req, res) => {
    res.render('create', {
        title: 'create',
        layout: 'layout/main-layout'
    })
})

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
})