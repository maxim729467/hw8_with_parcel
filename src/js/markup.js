export const markUpFunc = function (images) {
    const list = document.querySelector('.js-gallery');
    const imagesMarkup = images.map((image, i) => {
        return `<li class="gallery_item">
    <a class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      data-number = ${i}
      alt="${image.description}"
    />
  </a>
  </li>`;
    }).join('');
    
    list.insertAdjacentHTML('afterbegin', imagesMarkup);
}