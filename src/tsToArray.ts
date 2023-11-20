export type ITranscriptLine = {
  start: string;
  end: string;
  speech: string;
}

export default function parseTranscript(vtt: string): ITranscriptLine[] {
  // 1. separate lines by matching the format like "[00:03:04.000 --> 00:03:13.000]   XXXXXX"
  const lines: string[] = vtt.match(/\[[0-9:.]+\s-->\s[0-9:.]+\].*/g);

  // 2. remove the first line, which is empty
  lines.shift();

  // 3. convert each line into an object
  return lines.map(line => {
    // 3a. split ts from speech
    let [timestamp, speech] = line.split(']  '); // two spaces (3 spaces doesn't work with punctuation like period . )

    // 3b. remove the open bracket of timestamp
    timestamp = timestamp.substring(1);

    // 3c. split timestamp into begin and end
    const [start, end] = timestamp.split(' --> ');
    
    // 3d. remove \n from speech with regex
    speech = speech.replace(/\n/g, '');
    
    // 3e. remove beginning space
    speech = speech.replace(' ', '');

    return { start, end, speech };
  });
}