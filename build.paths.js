
const paths = require('path');

module.exports = function() {

    
    // =========== DIRS ===========
    var dirs = {};

    dirs.ROOT = __dirname;
    dirs.SRC = dirs.ROOT + '/src';
    dirs.BIN = dirs.ROOT + '/bin';


    // =========== FILES ===========
    var files = {};
    
    files.ENTRY = dirs.SRC + '/app.ts';
    files.INDEX_TEMPLATE = dirs.SRC + '/index.ejx'
    
    
    return {
        dirs,
        files
    };
    
}();




