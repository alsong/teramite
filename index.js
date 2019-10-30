const express = require('express'),
    mongoose = require('mongoose'),
    app = express()

mongoose.connect('mongodb://alsong:test123@ds018839.mlab.com:18839/animatedb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000 || process.env.PORT, () => { console.log("Listening to port 3000") })
    })
    .catch(err => {
        console.log(err)
    })
