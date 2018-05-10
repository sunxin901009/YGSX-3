import axios from  './index.js';

export function getSlider() {
  return axios.get('/sliders');
}

