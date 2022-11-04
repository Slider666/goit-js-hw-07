import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const newGallary = galleryItems.map(({ preview, original, description }) => {
  const newEl = document.createElement('div');
  newEl.classList.add('gallery__item');
  newEl.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>`
  );
  return newEl;
});

galleryEl.append(...newGallary);

galleryEl.addEventListener('click', onClickImage);

function onClickImage(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="auto" height="auto">
  `);

  instance.show();

  galleryEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

console.log(galleryItems);
