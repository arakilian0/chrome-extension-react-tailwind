// Imports
const buildClean = require('./buildClean')
const buildManifest = require('./buildManifest')
const buildWebpack = require('./buildWebpack')
const buildZip = require('./buildZip')

// Check if the repsective argument exist
// Run the script if it does
if (process.env.npm_config_clean) buildClean()
if (process.env.npm_config_manifest) buildManifest()
if (process.env.npm_config_webpack) buildWebpack()
if (
    !process.env.npm_config_clean &&
    !process.env.npm_config_manifest &&
    !process.env.npm_config_webpack && 
    process.env.npm_config_zip
) buildZip()

// The "build" function will only run if no arguments
if (
    !process.env.npm_config_clean &&
    !process.env.npm_config_manifest &&
    !process.env.npm_config_webpack && 
    !process.env.npm_config_zip
) {
    buildClean()
    buildManifest()
    buildWebpack()
}