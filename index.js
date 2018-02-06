var qr = require('qr-image');
 
var qr_png = qr.image('I love QR!', { type: 'png' });

// this means 'node I'd like you to write me a file'
qr_png.pipe(require('fs').createWriteStream('i_love_qr.png'));
// read bout node loops
 
// Gives us the text of the svg
// var svg_string = qr.imageSync('I love QR!', { type: 'png' });