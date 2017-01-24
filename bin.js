#!/usr/bin/env node

var nimstall = require('./lib/');

var args = process.argv.slice(1)

if (args[0].includes(".js") || args[0].includes("nimstall")) {
	args.shift()
}

nimstall(args);
