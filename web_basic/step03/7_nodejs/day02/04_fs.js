const fs  = require("fs");

var buf1 = fs.readFileSync("./note.txt");
fs.writeFileSync('./log/note.backup.txt',buf1);

var buf2 = fs.readFileSync('./img/1.jpg');
fs.writeFileSync('./log/1.backup.jpg',buf2);