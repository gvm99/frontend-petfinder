import retinopathy_1 from '../assets/temp/10043_left.jpeg';
import retinopathy_2 from '../assets/temp/10109_left.jpeg';
import retinopathy_3 from '../assets/temp/10112_left.jpeg';
import retinopathy_4 from '../assets/temp/10120_left.jpeg';
import retinopathy_5 from '../assets/temp/10147_left.jpeg';

import radiography_1 from '../assets/temp/torax_1.jpeg';
import radiography_2 from '../assets/temp/torax_2.jpeg';
import radiography_3 from '../assets/temp/torax_3.jpeg';
import radiography_4 from '../assets/temp/torax_4.jpeg';
import radiography_5 from '../assets/temp/torax_5.jpeg';

const retinopathy = [
  retinopathy_1,
  retinopathy_2,
  retinopathy_3,
  retinopathy_4,
  retinopathy_5,
];

const radiography = [
  radiography_1,
  radiography_2,
  radiography_3,
  radiography_4,
  radiography_5,
];

function shuffleArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function getTempImages(type: string) {
  const randomIndex = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

  if (/^retin/i.test(type)) {
    shuffleArray(retinopathy);
    return retinopathy.filter((_, idx) => idx !== randomIndex);
  }

  shuffleArray(radiography);
  return radiography.filter((_, idx) => idx !== randomIndex);
}
