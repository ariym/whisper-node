# whisper-node

NodeJS bindings for OpenAI's Whisper.

- Output transcripts to JSON (and .txt .srt .vtt)
- Runs on CPU (instead of GPU)

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

const wavFile = require('./file.wav'); // only wav files

const params = {
  filePath: wavfile,
  model: "medium",
  output: "JSON",
}

const transcript = await whisper(params);
```

## Made with

- [Whisper OpenAI (using cpp port by: ggerganov)](https://github.com/ggerganov/whisper.cpp)
- [ShellJS](https://www.npmjs.com/package/shelljs)

## Roadmap

- [] Deprecate use of *path* package for browser and react-native compatibility
- [] [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) to support mp3 and video ripping
- [] [Pyanote diarization](https://huggingface.co/pyannote/speaker-diarization) for speaker names
