# whisper-json

NodeJS bindings for OpenAI's Whisper.

This project is written using Typescript.


## Installation

`
npm i whisper-json
`

## Usage

`
import whisper from 'whisper-json';

const wavFile = require('./file.wav'); // 

const params = {
  file: wavFile,
  model: "medium",
  output: "JSON",

}

const {progress, transcript} = await whisper(params);
`

## Roadmap

[] Integrate fluent-ffmpeg (npm) to support mp3 and video ripping
