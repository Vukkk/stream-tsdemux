const fs = require('fs');
const { TSDemuxer } = require('./index.js');

const source = fs.createReadStream('./samples/av.ts');
const video = fs.createWriteStream('./output-video.h264');
const audio = fs.createWriteStream('./output-audio.aac');
const id3 = fs.createWriteStream('./output-id3.bin');

const demuxer = new TSDemuxer({
  video: video,
  audio: audio,
  id3: id3,
});
source.pipe(demuxer);
