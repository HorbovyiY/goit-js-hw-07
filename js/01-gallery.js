import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('div.gallery');
const galleryMarkup = galleryItems.map(({ preview, original, description }) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');

container.insertAdjacentHTML('beforeend', galleryMarkup);

container.addEventListener('click', onContainerClick);

function onContainerClick(e) { 
    
    if (!e.target.classList.contains('gallery__image')) { 
        return;
    }
    e.preventDefault();
    const bigSizeImg = e.target.dataset.source;
    
   const instance = basicLightbox.create(`
    <img src="${bigSizeImg}" width="800" height="600">
`)

instance.show()

}
