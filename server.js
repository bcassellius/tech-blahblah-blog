const { appendFile } = require('fs');
const path = require('path');

appendFile.use(express.static(path.join(__dirname, 'public')));