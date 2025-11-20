'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const bcrypt      = require('bcrypt');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

// Asynchronous hashing and comparison example
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    if (err) {
        console.error('Error hashing (async):', err);
        return;
    }

    console.log('Async hash:', hash);

    // compare correct password
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        if (err) console.error('Error comparing (async) correct:', err);
        console.log('Async compare (correct):', res);
    });

    // compare incorrect password
    bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
        if (err) console.error('Error comparing (async) incorrect:', err);
        console.log('Async compare (incorrect):', res);
    });
});

//END_ASYNC

//START_SYNC

// Synchronous hashing and comparison example
try {
    const syncHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
    console.log('Sync hash:', syncHash);

    // compare correct password
    console.log('Sync compare (correct):', bcrypt.compareSync(myPlaintextPassword, syncHash));

    // compare incorrect password
    console.log('Sync compare (incorrect):', bcrypt.compareSync(someOtherPlaintextPassword, syncHash));
} catch (err) {
    console.error('Error (sync):', err);
}

//END_SYNC





























const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("Listening on port:", PORT)
});
