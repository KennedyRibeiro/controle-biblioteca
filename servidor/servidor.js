const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('cliente', { 'extensions': ['html'] }));

const diretorioHtml = path.join(__dirname, '..', 'cliente', 'index.html');

app.get('/', (req, res) => {
    res.contentType('.html')
    res.sendFile(diretorioHtml);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});