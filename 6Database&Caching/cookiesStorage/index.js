const express = require('express')
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3010

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/logout', (req, res) => {
  res.setHeader('Clear-Site-Data', '"cache", "cookies", "storage"');
  res.redirect('/');
});

app.use('/set-preferences', (req, res) => {
  const preferences = req.body.preferences;
  res.cookie('userPreferences', preferences, {maxAge: 3600000}); // expires in 1hr
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`server is running 0n http://localhost:${PORT}`);
})