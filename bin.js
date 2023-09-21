#!/usr/bin/env node
'use strict'

const mri = require('mri')

const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: [
		'help', 'h',
		'version', 'v',
		'continue-on-train-change'
	]
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    record-ice-movement >file.ndjson
Options:
    --continue-on-train-change  Continue recording even if the Triebzugnummer
                                 reported by the on-board WiFi has changed, e.g.
                                 when your client accidentally connects to
                                 the WiFi of a different train.
                                 Default: false
\n`)
	process.exit(0)
}

if (argv.version || argv.v) {
	process.stdout.write(`record-ice-movement v${pkg.version}\n`)
	process.exit(0)
}

const showError = (err) => {
	if (process.env.NODE_ENV === 'dev') console.error(err)
	else console.error(err.message || (err + ''))
	process.exit(1)
}

const createStream = require('wifi-on-ice-position-stream')
const {stringify} = require('ndjson')

createStream({
	endOnTrainChange: !argv['continue-on-train-change']
})
.on('error', (err) => {
	console.error(err)
	process.exitCode = 1
})
.pipe(stringify())
.pipe(process.stdout)
