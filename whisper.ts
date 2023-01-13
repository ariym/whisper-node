// return as syntax for whisper cpp command
export const createCppCommand = ({ filePath, model, options }: CppCommandTypes) =>

  `./main ${getFlags(options)} -m ./models/${models[model]} -f ${filePath} `;



// list of models: https://github.com/ggerganov/whisper.cpp/#more-audio-samples
const models = {
  "en_base": "ggml-base.en.bin",
  "en_medium": "ggml-medium.en.bin",
  "large": "ggml-large.bin"
}


// options list: https://github.com/ggerganov/whisper.cpp/blob/master/README.md?plain=1#L91
const getFlags = (flags: FlagTypes): string => {
  let s = "";

  // output files
  if (flags["gen-file-txt"]) s += " -otxt";
  if (flags["gen-file-subtitle"]) s += " -osrt";
  if (flags["gen-file-vtt"]) s += " -ovtt";
  // timestamps
  if (flags["timestamp-size"]) s += " -ml " + flags["timestamp-size"];
  if (flags["word-timestamps"]) s += " -ml 1";

  return s;
}


type CppCommandTypes = {
  filePath: string,
  model: string,
  options: FlagTypes
}


type FlagTypes = {
  "gen-file-txt"?: boolean,
  "gen-file-subtitle"?: boolean,
  "gen-file-vtt"?: boolean,
  "timestamp-size"?: number,
  "word-timestamps"?: boolean
}