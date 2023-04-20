import path from "path";
import shell from 'shelljs';

// docs: https://github.com/ggerganov/whisper.cpp
const WHISPER_CPP_PATH = path.join(__dirname, '..', 'lib/whisper.cpp');
const WHISPER_CPP_MAIN_PATH = "./main";

export interface IShellOptions {
  silent: boolean, // true: won't print to console
  async: boolean
}

// default passed to shelljs exec
const defaultShellOptions = {
  silent: true, // true: won't print to console
  async: false
}


// return shelljs process
export default async function whisperShell
  (command: string, options: IShellOptions = defaultShellOptions): Promise<any> {

  return new Promise(async (resolve, reject) => {
    try {
      // docs: https://github.com/shelljs/shelljs#execcommand--options--callback
      shell.exec(
        command,
        options,
        (code: number, stdout: string, stderr: string) => {
  
          if (code === 0) resolve(stdout);
          else reject(stderr);
  
        }
      )
    } catch (error) {
      reject(error)
    }
  });

}

try {

  // shell.cd(__dirname + WHISPER_CPP_PATH);
  shell.cd(WHISPER_CPP_PATH);

  // ensure command exists in local path
  if (!shell.which(WHISPER_CPP_MAIN_PATH)) {
    shell.echo("[whisper-node] Problem. whisper.cpp not initialized. Current shelljs directory: ", __dirname);
    shell.echo("[whisper-node] Attempting to run 'make' command in /whisper directory...");

    // todo: move this
    shell.exec("make", defaultShellOptions);

    if (!shell.which(WHISPER_CPP_MAIN_PATH)) {
      console.log("[whisper-node] Problem. 'make' command failed. Please run 'make' command in /whisper directory. Current shelljs directory: ", __dirname);
      process.exit(1);
    }
    else console.log("[whisper-node] 'make' command successful. Current shelljs directory: ", __dirname);

  }
} catch (error) {
  console.log("error caught in try catch block")
  throw error;
}