const spawn = require('child_process').spawn;

function nimstall(args) {
	args.unshift("install")

	var bin = spawn("npm", args);

    bin.stdout.on('data', (data) => {
      console.log(`${data}`)
    });

    bin.stderr.on('data', (data) => {
      console.log(`${data}`)
    });
}

module.exports = nimstall;
