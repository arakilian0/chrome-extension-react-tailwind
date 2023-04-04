// Imports
const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

// Variables
const outDirectory = path.resolve(
    pkg.config.output
)
const outFile = path.resolve(
    pkg.config.output,
    'manifest.json'
)

// Build manifest.json from package.json
function buildManifest() {
    // If no output directory, create one
    if (!fs.existsSync(outDirectory)){
        fs.mkdirSync(outDirectory)
    }

    // If manifest already exists, delete it
    if (fs.existsSync(outFile)){
        fs.rmSync(outFile, { 
            recursive: false, 
            force: true 
        })
    }

    // Build new manifest.json file
    fs.writeFile(
        outFile, 
        JSON.stringify(pkg.manifest), 
        'utf8', 
        () => {}
    )
}

module.exports = buildManifest