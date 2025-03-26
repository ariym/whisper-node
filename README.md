# whisper-node

[![npm downloads](https://img.shields.io/npm/dm/whisper-node)](https://npmjs.org/package/whisper-node)
[![npm downloads](https://img.shields.io/npm/l/whisper-node)](https://npmjs.org/package/whisper-node)  

Node.js bindings for OpenAI's Whisper. Transcription done local.

## Features

- Output transcripts to **JSON** (also .txt .srt .vtt)
- **Optimized for CPU** (Including Apple Silicon ARM)
- Timestamp precision to single word

## Installation

1. Add dependency to project

```text
npm install whisper-node
```

2. Download whisper model of choice [OPTIONAL]

```text
npx whisper-node download
```

[Requirement for Windows: Install the ```make``` command from here.](https://gnuwin32.sourceforge.net/packages/make.htm)

## Usage

```javascript
import whisper from 'whisper-node';

const transcript = await whisper("example/sample.wav");

console.log(transcript); // output: [ {start,end,speech} ]
```

### Output (JSON)

```javascript
[
  {
    "start":  "00:00:14.310", // time stamp begin
    "end":    "00:00:16.480", // time stamp end
    "speech": "howdy"         // transcription
  }
]
```

### Full Options List

```javascript
import whisper from 'whisper-node';

const filePath = "example/sample.wav"; // required

const options = {
  modelName: "base.en",       // default
  // modelPath: "/custom/path/to/model.bin", // use model in a custom directory (cannot use along with 'modelName')
  whisperOptions: {
    language: 'auto',          // default (use 'auto' for auto detect)
    gen_file_txt: false,      // outputs .txt file
    gen_file_subtitle: false, // outputs .srt file
    gen_file_vtt: false,      // outputs .vtt file
    word_timestamps: true     // timestamp for every word
    // timestamp_size: 0      // cannot use along with word_timestamps:true
  }
}

const transcript = await whisper(filePath, options);
```

### Input File Format

Files must be .wav and 16Hz

Example .mp3 file converted with an [FFmpeg](https://ffmpeg.org) command: ```ffmpeg -i input.mp3 -ar 16000 output.wav```

## Made with

- [Whisper OpenAI (using C++ port by: ggerganov)](https://github.com/ggerganov/whisper.cpp)
- [ShellJS](https://www.npmjs.com/package/shelljs)

## Roadmap

- [x] Support projects not using Typescript
- [x] Allow custom directory for storing models
- [ ] Config files as alternative to model download cli
- [ ] Remove *path*, *shelljs* and *prompt-sync* package for browser, react-native expo, and webassembly compatibility
- [ ] [fluent-ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg) to automatically convert to 16Hz .wav files as well as support separating audio from video
- [ ] [Pyanote diarization](https://huggingface.co/pyannote/speaker-diarization) for speaker names
- [ ] [Implement WhisperX as optional alternative model](https://github.com/m-bain/whisperX) for diarization and higher precision timestamps (as alternative to C++ version)
- [ ] Add option for viewing detected langauge as described in [Issue 16](https://github.com/ariym/whisper-node/issues/16)
- [ ] Include typescript typescript types in ```d.ts``` file
- [x] Add support for language option
- [ ] Add support for transcribing audio streams as already implemented in whisper.cpp

## Modifying whisper-node

```npm run dev``` - runs nodemon and tsc on '/src/test.ts'

```npm run build``` - runs tsc, outputs to '/dist' and gives sh permission to 'dist/download.js'

## Acknowledgements

- [Georgi Gerganov](https://ggerganov.com/)
- [Ari](https://aricv.com)
