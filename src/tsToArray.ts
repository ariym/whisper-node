export type ITranscriptLine = {
  start: string;
  end: string;
  speech: string;
}

export default function parseTranscript(vtt: string): ITranscriptLine[] {
  
  const lines = vtt.split('[');

  // 1a. Remove the first line, which is empty
  lines.shift();

  // 2. Convert each line into an object
  const transcript = lines.map((line) => {
    // 2a. split ts from speech
    const lineSplit = line.split(']  ');
    // 2b. split timestamp into begin and end
    const timestamp = lineSplit[0].split(' --> ');
    // 3c. remove \n from speech
    const speech = lineSplit[1].replace('\n', '');

    return {
      start: timestamp[0],
      end: timestamp[1],
      speech,
    }
  });

  return transcript;
}