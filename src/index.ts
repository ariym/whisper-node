import path from 'path'
import shell, {IShellOptions} from './shell';
import { createCppCommand, IFlagTypes } from './whisper';
import transcriptToArray, { ITranscriptLine } from './tsToArray';


interface IOptions {
  modelName?: string, // name of model stored in node_modules/whisper-node/lib/whisper.cpp/models
  modelPath?: string, // custom path for model
  whisperOptions?: IFlagTypes
  shellOptions?: IShellOptions
}

// returns array[]: {start, end, speech}
export const whisper = async (filePath: string, options?: IOptions): Promise<ITranscriptLine[]> => {

  try {
    console.log("[whisper-node] Transcribing:", filePath, "\n");

    // todo: combine steps 1 & 2 into sepparate function called whisperCpp (createCppCommand + shell)

    // 1. create command string for whisper.cpp
    const command = createCppCommand({
      filePath: path.normalize(filePath),
      modelName: options?.modelName,
      modelPath: options?.modelPath,
      options: options?.whisperOptions
    })

    // 2. run command in whisper.cpp directory 
    // todo: add return for continually updated progress value
    const transcript = await shell(command, options?.shellOptions);

    // 3. parse whisper response string into array
    const transcriptArray = transcriptToArray(transcript);

    return transcriptArray;

  } catch (error) {
    console.log("[whisper-node] Problem:", error);
  }
};

export default whisper;
