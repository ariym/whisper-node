# whisper-node

NodeJS bindings for OpenAI's Whisper.

- Output transcripts to JSON (in addition to .txt .srt .vtt)
- Runs on CPU (instead of GPU)
- Timestamp accurate to a single word

## Installation

1. Add dependency to project
`
npm i whisper-node
`

2. Download whisper model(s) of choice
`
npx whisper-node download
`

## Usage

```javascript
import whisper from 'whisper-node';

const params = {
  filePath: "example/sample.wav", // required
  model:    "medium",             // default
  output:   "JSON",               // default
}

const transcript = await whisper(params);
```

### Sample Output

```json
[
  {
    "tsB":    "00:00:14.310",       // time stamp begin
    "tsE":    "00:00:20.480",       // time stamp end
    "speech": "hey how's it going"  // transcription
  },
]
```

## Made with

- [Whisper OpenAI (using cpp port by: ggerganov)](https://github.com/ggerganov/whisper.cpp)
- [ShellJS](https://www.npmjs.com/package/shelljs)

## Roadmap

[] Deprecate use of *path* package for browser and react-native compatibility
[] [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) to support mp3 and video ripping
[] [Pyanote diarization](https://huggingface.co/pyannote/speaker-diarization) for speaker names
