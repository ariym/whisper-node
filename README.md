# whisper-json

NodeJS bindings for OpenAI's Whisper.

## Features

- Output transcripts to JSON (and .txt .srt .vtt)
- Runs on CPU (instead of GPU)

## Built with

- [Typescript](https://www.typescriptlang.org/)
- [Whisper OpenAI (using cpp port by: ggerganov)](https://github.com/ggerganov/whisper.cpp)

## Installation

1. Add dependency to project
`
npm i whisper-json
`

2. Download whisper model of choice (run in project root)
`
npx whisper-json download model-name
`

## Usage

```javascript
import whisper from 'whisper-json';

const wavFile = require('./file.wav'); // only wav files

const params = {
  file: wavFile,
  model: "medium",
  output: "JSON",
}

const transcript = await whisper(params);
```

## Documentation

### Project structure

- **index.ts** entry
- **shell.ts** run command, config env
- **whisper-command.ts** format command to whisper syntax
- **whisper/**: [Whisper (cpp port)](https://github.com/ggerganov/whisper.cpp) module

## Roadmap

- [] [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) to support mp3 and video ripping
- [] [Pyanote diarization](https://huggingface.co/pyannote/speaker-diarization) for speaker names
