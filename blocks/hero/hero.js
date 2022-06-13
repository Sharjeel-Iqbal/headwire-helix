import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  const heros = document.createElement('div');
  heros.className = 'hero';
  [...block.children].forEach((row) => {
    heros.innerHTML += row.innerHTML;
  });
  [...heros.children].forEach((row) => {
    // console.log(row);
    // if (!row.hasChildNodes()) {
    //   row.remove();
    // }
    [...row.children].forEach((content) => {
      // if (!content.hasChildNodes()) {
      //   content.remove();
      // }

    });
  });

  block.textContent = '';
  const heroRows = heros.querySelectorAll('div');

  heros.querySelectorAll('img');

  heros.querySelectorAll('img').forEach((img) => {
    img.closest('p').className = 'hero-image-container';
    img.className = 'hero-image';
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  });

  heroRows[0].className = 'hero-heading';
  heroRows[1].className = 'hero-subtitle';
  block.append(heros);
}
