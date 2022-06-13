export default function decorate(block) {
  const heros = document.createElement('div');
  heros.className = 'hero';
  [...block.children].forEach((row) => {
    heros.innerHTML += row.innerHTML;
  });
  [...heros.children].forEach((row) => {
    if (!row.hasChildNodes()) {
      row.remove();
    }
    [...row.children].forEach((content) => {
      if (!content.hasChildNodes()) {
        content.remove();
      }
      content.querySelectorAll('picture').forEach((element) => {
        element.closest('p').className = 'hero-image-container';
        element.querySelector('img').className = 'hero-image';
      });
    });
  });

  block.textContent = '';
  const heroRows = heros.querySelectorAll('div');
  heroRows[0].className = 'hero-heading';
  heroRows[1].className = 'hero-subtitle';
  block.append(heros);
}
