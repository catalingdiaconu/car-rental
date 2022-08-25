const path = require('path');
const express = require('express');
const app = express();

const appPort = '5000';

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(process.env.PORT || appPort , () => {
    console.log('server started on port 5000')
})