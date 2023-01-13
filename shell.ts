// docs: https://www.npmjs.com/package/shelljs
var shell = require('shelljs');


// return shelljs process
export default async function whisperShell(command: string, options?: object | undefined): Promise<any> {
  return new Promise((resolve, reject) => {
    shell.exec(
      command,
      options ? options : shellOptions,
      (code: number, stdout: string, stderr: string) => {
        console.log("[shelljs] Exit code:", code);
        // console.log("[shelljs] stderr:", stderr);

        if (code === 0) {
          console.log("the code is zero", code)
          // return stdout;
          // console.log("this is what we're resolving", stdout)
          resolve(stdout);
        }
        // else console.log("this is the code so we return nothing", code);
        else reject("no code 0");
      }
    );
  });
}


// shelljs options
const shellOptions = {
  silent: true, // don't print to console
  async: false
}


// change working directory
shell.cd(__dirname + "/whisper");


// ensure command exists in local path
if (!shell.which('./main')) {
  shell.echo("Problem. First you need to run 'make' command in /whisper directory. Current shelljs directory: ", __dirname);
  shell.exit(1);
}