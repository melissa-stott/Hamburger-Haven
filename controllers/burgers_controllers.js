const express = require('express');
const burger = require('../models/burger');
const fs = require('fs');
const path = require('path');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.static(path.join(__dirname, '/')));
app.set('view engine', 'handlebars');




