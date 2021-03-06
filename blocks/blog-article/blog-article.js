export default function decorate(block) {
  const blogArticle = document.createElement('div');
  blogArticle.className = 'blog-article-writing;';

  [...block.children].forEach((row) => {
    blogArticle.innerHTML += row.innerHTML;
  });

  blogArticle.querySelector('div').className = 'blog-article-heading';
  // blogArticle.querySelectorAll('picture').forEach((element) => {
  //   element.closest('p').className = 'blog-content-img';
  // });
  blogArticle.querySelectorAll('div:not(:nth-child(1))').forEach((element) => {
    element.className = 'blog-article-content';
  });

  [...blogArticle.children].forEach((row) => {
    if (!row.hasChildNodes()) {
      row.remove();
    }
  });

  const blogCited = document.createElement('div');
  blogCited.className = 'blog-cited';
  [...blogArticle.querySelectorAll('.blog-article-heading p')].forEach((cite) => {
    if (cite.hasChildNodes()) {
      const citedP = document.createElement('p');
      citedP.innerHTML += cite.innerHTML;
      cite.textContent = '';
      blogCited.append(citedP);
    }
  });
  blogArticle.querySelector('.blog-article-heading').append(blogCited);
  blogArticle.querySelector('div h1').className = 'blog-title';
  block.textContent = '';
  block.append(blogArticle);
}
