// Object Composition

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

const GuitarAmp = (options) => {
  return Object.assign({}, distortion, volume, cabinet, options);
}

const BassAmp = (options) => {
  return Object.assign({}, lowCut, volume, cabinet, options);
}

const ChannelStrip = (options) => {
  return Object.assign({}, inputLevel, lowCut, volume, options);
}

const guitarAmp = GuitarAmp({
  distortion: 3,
  volume: 3,
  cabinet: 'vintage'
})
