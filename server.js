// KYT Visual DTJKT E4 K3LH — SMK TI Muhammadiyah Cikampek
// Static server (Vercel-safe, tanpa DB). Data KYT di public/app.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/places', (req, res) => res.json(require('./public/places.json')));
app.listen(PORT, () => console.log('kyt-dtjkt :' + PORT));
module.exports = app;
