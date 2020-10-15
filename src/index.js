module.exports.search = function(query) {
    const file = require(`./info/${query}`);
    if(!file) return;

    return file;
}