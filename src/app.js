const express = require('express');
const app = express();
const port = 3000;
const registroController = require('./controller/registroController');

app.use(express.json());
app.use(registroController);


app.get('/home', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});