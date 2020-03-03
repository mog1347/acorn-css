const path = require('path');
module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require(path.resolve(__dirname, './postcss/kernel.js'))({
            giveMeFive:true
        })
    ]
}