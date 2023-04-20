import {whisper} from './index';
(async function run() {
  try {

    const transcript = await whisper(
      "/Users/Shared/twospeak_clip.wav",
      {
        // modelPath: "/Users/Shared/custom-models/ggml-base.en.bin",
        // modelName: "base.en",
        whisperOptions: { word_timestamps: true }
      }
    );

    console.log("transcript", transcript);

  } catch (error) {
    console.log("ERROR", error);
  }
})()