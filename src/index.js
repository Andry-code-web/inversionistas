const express = require('express');
const app = express();
const port = 3000;
const connection = require('./database/db');

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Motor de plantillas
app.set('view engine', 'ejs');

//Rutas
//app.use('/', require('./routes/index'));

//Conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});