export type ITranscriptLine = {
  start: string;
  end: string;
  speech: string;
}

export default function parseTranscript(vtt: string): ITranscriptLine[] {
  // 1. sepparate lines at timestamp's open bracket
  const lines: string[] = vtt.split('[');

  // 2. remove the first line, which is empty
  lines.shift();

  // 3. convert each line into an object
  return lines.map(line => {
    // 3a. split ts from speech
    let [timestamp, speech] = line.split(']  ');
    
    // 3b. split timestamp into begin and end
    const [start, end] = timestamp.split(' --> ');
    
    // 3c. remove \n from speech with regex
    speech = speech.replace(/\n/g, '');

    return { start, end, speech };
  });
}