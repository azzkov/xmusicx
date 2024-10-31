const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('public'));

app.get('/audio/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'public', req.params.filename);
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size,
    });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});