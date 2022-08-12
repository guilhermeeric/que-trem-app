const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {

  const defaultMessage = 'Ainda não encontrei o arquivo com o secret dessa pessoa ):';
  const devtools = {
    'guilherme': { message: defaultMessage },
    'lua': { message: defaultMessage },
    'dani': { message: defaultMessage },
    'rogerinho': { message: defaultMessage },
    'nando': { message: defaultMessage },
    'almeida': { message: defaultMessage },
    'manga': { message: defaultMessage }
  };

  for (member of Object.keys(devtools)) {
    try {
      devtools[member].message = fs.readFileSync(`./secrets/${member}`, 'utf8');
    } catch (e) { }
  }

  res.send(
    `<b>Message from Guilherme</b>: ${devtools.guilherme.message}<br /><br />
     <b>Message from Lua</b>: ${devtools.lua.message}<br /><br />
     <b>Message from Dani</b>: ${devtools.dani.message}<br /><br />
     <b>Message from Rogerinho</b>: ${devtools.rogerinho.message}<br /><br />
     <b>Message from Nando</b>: ${devtools.nando.message}<br /><br />
     <b>Message from Almeida</b>: ${devtools.almeida.message}<br /><br />
     <b>Message from Manga</b>: ${devtools.manga.message}<br /><br />
     <iframe src="https://giphy.com/embed/NdKVEei95yvIY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    `
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
