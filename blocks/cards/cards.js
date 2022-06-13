import { createOptimizedPicture } from '../../scripts/scripts.js';

// Basic Structure for a component.

export default function decorate(block) {
  const cards = document.createElement('div');
  cards.className = 'cards-row';

  [...block.children].forEach((row) => {
    cards.innerHTML += row.innerHTML;
  });

  [...cards.children].forEach((card) => {
    card.querySelector('picture').closest('p').className = 'card-image-container';
    const contentBlock = document.createElement('div');
    card.querySelector('h2').className = 'card-heading';
    // Store title description inside a div separating itself from the picture
    [...card.children].forEach((content) => {
      if (content.className !== 'card-image-container' && content.hasChildNodes()) {
        contentBlock.append(content);
      }
      // Removes unneeded nodes and paragraph tags.
      if (!content.hasChildNodes()) {
        content.remove();
      }
    });
    contentBlock.className = 'card-content';
    const contentDescription = contentBlock.querySelectorAll('p');
    if (contentDescription.length > 0) {
      for (let i = 0; i < contentDescription.length; i += 1) {
        contentDescription[i].className = 'card-description';
      }
    }
    card.append(contentBlock);
    card.className = 'card';
  });

  block.textContent = '';
  block.append(cards);

  cards.querySelectorAll('img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
  });
}
