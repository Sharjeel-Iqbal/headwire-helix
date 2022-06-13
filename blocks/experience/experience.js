import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  const experience = document.createElement('div');
  experience.className = 'experience-row';
  [...block.children].forEach((row) => {
    experience.innerHTML += row.innerHTML;
  });
  [...experience.children].forEach((row) => {
    if (!row.hasChildNodes()) {
      row.remove();
    }
    [...row.children].forEach((content) => {
      if (!content.hasChildNodes()) {
        content.remove();
      }
    });
  });

  block.textContent = '';
  const experienceRows = experience.querySelectorAll('div');
  experienceRows[0].className = 'experience-image-container';
  experienceRows[1].className = 'experience-content';
  const experienceDescription = experienceRows[1].querySelectorAll('p');
  if (experienceDescription.length > 1) {
    for (let i = 0; i < experienceDescription.length; i += 1) {
      experienceDescription[i].className = 'experience-description';
    }
  }
  const img = experience.querySelector('img');
  img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));

  block.append(experience);
}
