import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imagesMarkup);

new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
  scrollZoom: false,
});