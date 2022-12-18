# whisper-json

NodeJS bindings for OpenAI's Whisper.

## Built with

- [Typescript](https://www.typescriptlang.org/)
- [Whisper CPP (by: ggerganov)](https://github.com/ggerganov/whisper.cpp)


## Installation

```bash
npm i whisper-json
```

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

## Roadmap

- [] [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) to support mp3 and video ripping
- [] [Pyanote diarization](https://huggingface.co/pyannote/speaker-diarization) for speaker names
