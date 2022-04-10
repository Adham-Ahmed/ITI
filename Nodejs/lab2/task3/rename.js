var fs = require('fs');
fs.rename('test.txt', 'info.txt', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});