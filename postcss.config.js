const path = require('path');
module.exports = {
    plugins: [
        require(path.resolve(__dirname, './postcss/test.js'))({
            giveMeFive:true
        })
    ]
}