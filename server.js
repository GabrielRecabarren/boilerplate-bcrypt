'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt'); // ← Aquí está la corrección
const app         = express();
const cors = require('cors');
app.use(cors());
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

// Código asíncrono aquí (si es necesario)

//END_ASYNC

//START_SYNC

// Código síncrono aquí (si es necesario)

//END_SYNC

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("Listening on port:", PORT)
});


