#!/usr/bin/env node
'use strict'

const mri = require('mri')

const pkg = require('./package.json')

const argv = mri(process.argv.slice(2), {
	boolean: [
		'help', 'h',
		'version', 'v'
	]
})

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    record-ice-movement >file.ndjson
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

const pump = require('pump')
const createStream = require('wifi-on-ice-position-stream')
const {stringify} = require('ndjson')

pump(
	createStream(),
	stringify(),
	process.stdout,
	(err) => {
		console.error(err)
		process.exit(1)
	}
)
