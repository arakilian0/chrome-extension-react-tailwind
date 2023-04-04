// Imports 
const fs = require('fs')
const path = require('path')
const zip = require('bestzip')
const pkg = require('../package.json')

// Variables
const outDirectory = path.resolve(
    pkg.config.output
)
const zipDirectory = path.resolve(
    pkg.config.zip.output
)
const zipFile = path.resolve(
    // Zip Path
    pkg.config.zip.output,
    // Zip Filename
    pkg.manifest.name+
    pkg.config.zip.seperator+
    pkg.manifest.version+
    '.zip'
)

// Build distributable (.zip)
function buildZip() {
    // If no zip directory, create one
    if (!fs.existsSync(zipDirectory)) {
        fs.mkdirSync(zipDirectory)
    }

    // If zip version already exists, delete it
    if (fs.existsSync(zipFile)) {
        fs.rmSync(zipFile, { 
            recursive: true, 
            force: true 
        })
    }

    // Zip output directory
    zip({
        source: '*', // zip all contents
        cwd: outDirectory, // from output 
        destination: zipFile // into filename
      }).then(function() {
        console.log('Zipped');
      }).catch(function(err) {
        console.error(err.stack);
        process.exit(1);
    })
}

module.exports = buildZip