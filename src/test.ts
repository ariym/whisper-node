import {whisper} from './index';
(async function run() {
  try {


    const transcript = await whisper(
      // "/Users/Shared/twospeak_clip.wav",
      "/Users/Shared/mando.wav",
      {
        // modelPath: "/Users/Shared/custom-models/ggml-base.en.bin",
        modelName: "base",
        whisperOptions: { 
          language: 'auto',
          word_timestamps: false,
          timestamp_size: 1
        }
      }
    );

    console.log("transcript", transcript);

    // prefer when word_timestamps=true
    // console.table(transcript)

    console.log(transcript.length, "rows.");

    
  } catch (error) {
    console.log("ERROR", error);
  }
})()