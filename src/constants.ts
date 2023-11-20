export const DEFAULT_MODEL = "base.en";
export const NODE_MODULES_MODELS_PATH =
  process.env.NODE_ENV === "development"
    ? "lib/whisper.cpp/models"
    : "node_modules/whisper-node/lib/whisper.cpp/models";
