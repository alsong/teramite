const express = require('express'),
app = express()

app.listen(3000 || process.env.PORT, () => {console.log("Listening to port 3000")})