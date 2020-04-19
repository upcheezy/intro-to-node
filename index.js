const fs = require('fs');
const { animateSting } = require('./animate-string.js');

const contents = fs.readdirSync('./animals/animals');

animateSting(contents.join('\n'));