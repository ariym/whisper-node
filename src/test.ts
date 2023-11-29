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
          // word_timestamps: true,
          timestamp_size: 10
        }
      }
    );

    console.log("transcript", transcript);

    
  } catch (error) {
    console.log("ERROR", error);
  }
})()