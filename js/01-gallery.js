import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const imagesMarkup = galleryItems
  .map(
    ({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", imagesMarkup);

const onClick = (e) => {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const largeImg = e.target.dataset.source;

  const closeModal = (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `
      <img src="${largeImg}" width="800" height="600">
  `,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();
};

gallery.addEventListener("click", onClick);
