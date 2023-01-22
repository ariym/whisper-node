cd ./lib/whisper/models/
echo "[whisper-node] Attemping to download model..."
download-ggml-model.sh base.en
echo "[whisper-node] Attempting to compile model..."
make