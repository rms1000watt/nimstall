#!/usr/bin/env node

var nimstall = require('./lib/');

var args = process.argv.slice(1)

if (args[0].includes(".js")) {
	args.shift()
}

nimstall(args);
