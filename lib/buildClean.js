// Imports
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

// Variables
const outDirectory = path.resolve(
    pkg.config.output
)
const zipDirectory = path.resolve(
    pkg.config.zip.output
)

// Delete Build Files
function buildClean() {
    if (fs.existsSync(outDirectory)){
        fs.rmSync(outDirectory, { 
            recursive: true, 
            force: true 
        })
    }
    if (fs.existsSync(zipDirectory)){
        fs.rmSync(zipDirectory, { 
            recursive: true, 
            force: true 
        })
    }
}

module.exports = buildClean