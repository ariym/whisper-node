// docs: https://www.npmjs.com/package/shelljs
var shell = require('shelljs');

// docs: https://github.com/ggerganov/whisper.cpp
const WHISPER_CPP_PATH = "/lib/whisper.cpp";
const WHISPER_CPP_MAIN_PATH = "./main";

// passed to shelljs exec
const shellOptions = {
  silent: true, // don't print to console
  async: false
}


// return shelljs process
export default async function whisperShell
  (command: string, options?: object | undefined): Promise<any> {

  return new Promise((resolve, reject) => {

    shell.exec(
      command,
      options ? options : shellOptions,
      (code: number, stdout: string, stderr: string) => {

        if (code === 0) resolve(stdout);
        else reject(stderr);

      }
    ).catch((e: any) => reject(e));

  });

}


// change working directory to whisper submodule
shell.cd(__dirname + WHISPER_CPP_PATH);


// ensure command exists in local path
if (!shell.which(WHISPER_CPP_MAIN_PATH)) {
  shell.echo("[whisper-node] Problem. whisper.pp not initialized. Current shelljs directory: ", __dirname);
  shell.echo("[whisper-node] Attempting to run 'make' command in /whisper directory...");

  shell.exec("make", shellOptions);

  if (!shell.which(WHISPER_CPP_MAIN_PATH)) {
    console.log("[whisper-node] Problem. 'make' command failed. Please run 'make' command in /whisper directory. Current shelljs directory: ", __dirname);
    process.exit(1);
  } else {
    console.log("[whisper-node] 'make' command successful. Current shelljs directory: ", __dirname);
  }

}