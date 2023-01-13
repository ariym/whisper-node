import shell from './shell';
import { createCppCommand } from './whisper';
var path = require('path');
import transcriptToArray, { TranscriptType } from './tsToArray';



// returns array[]: {tsB, tsE, speech}
export default async function whisper(filePath: string, whisperOptions?: object): Promise<TranscriptType[]> {
  try {
    console.log("[whisper-json] Running in", filePath);

    // create command
    const command = createCppCommand({
      filePath: path.normalize(filePath),
      model: "en_base",
      options: {
        "word-timestamps": true,
      },
    });

    // todo: add return for continually updated progres value
    const transcript = await shell(command, whisperOptions);

    const transcriptArray = transcriptToArray(transcript);

    return transcriptArray;

  } catch (error) {
    console.log("top level error: ", error);
  }
}