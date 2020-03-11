const
    sass = require('sass'),
    path = require('path'),
    fs = require('fs'),
    sassJsImporter = require('node-sass-js-importer')

const distPath = path.resolve(__dirname, '../dist/kernel.css'),
    configPath = path.resolve(__dirname, './config/config.js'),
    themePath = path.resolve(__dirname, './config/theme.js'),
    scssPath = path.resolve(__dirname, './scss/kernel.scss')

// Prevent file from being cached by Node's `require` on continuous builds.
// https://github.com/Updater/node-sass-json-importer/issues/21

function deleteNodeRequireCache(...filePath) {
    filePath.forEach((f) => delete require.cache[require.resolve(f)])
}

deleteNodeRequireCache(configPath, themePath);

const configFunc = require(configPath),
    theme = require(themePath),
    configJson = configFunc(theme)

let configScss = sassJsImporter.transformJSONtoSass(configJson),
    kernelScss = fs.readFileSync(scssPath, 'utf-8')

sass.render({
    data: configScss + kernelScss,
    outFile: distPath,
    includePaths: [path.resolve(__dirname, './scss')],
    outputStyle: 'expanded'
}, function (err, result) {
    if (!err) {
        // No errors during the compilation, write this result on the disk
        fs.writeFile(distPath, result.css, function (err) {
            if (!err) {
                //file written on disk
            } else {
                console.log(err)
            }
        })
    } else {
        console.log(err)
    }
})


