export default function decorate(block) {
  const title = document.createElement('div');
  title.className = 'body-container-title';
  title.textContent = 'Title goes here';

  const text1 = document.createElement('div');
  text1.className = 'body-container-text';
  text1.textContent = 'First text goes here';

  const text2 = document.createElement('div');
  text2.className = 'body-container-text';
  text2.textContent = 'Second text goes here';

  block.append(title, text1, text2);
}