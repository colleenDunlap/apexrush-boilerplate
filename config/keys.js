// keys.js, figure out what set of creds to return
if (process.env.NODE_ENV === 'production') {
    // Return production keys
    module.exports = require('./prod');
} else {
    // We are in dev, return the dev keys!
    module.exports = require('./dev');
}