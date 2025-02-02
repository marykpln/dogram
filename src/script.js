const detailedImage = document.querySelector(".detailedContainer--image");
const detailedTitle = document.querySelector(".detailedContainer--title");
// const detailedContainer = document.querySelector(".detailedContainer");
const galleryElements = document.querySelectorAll(".gallery--item");

function addAnimation(element) {
  element.classList.add("animate__animated", "animate__fadeIn");

  element.addEventListener("animationend", () => {
    element.classList.remove("animate__animated", "animate__fadeIn");
  });
}

function setDetails(gelleryItem) {
  const imageElement = gelleryItem.querySelector(".gallery--item_image");
  // const titleElement = gelleryItem.getAttribute("data-detailed-text");
  // console.log(titleElement);
  detailedImage.src = imageElement.src;
  addAnimation(detailedImage);

  detailedTitle.innerHTML = gelleryItem.getAttribute("data-detailed-text");
  detailedTitle.classList.remove("gallery--item");
  detailedTitle.classList.add("detailedContainer--title");
  addAnimation(detailedTitle);
}

// for (let i = 0; i < galleryElements.length; i++) {
//   galleryElements[i].addEventListener("click", function () {
//     const currentGalleryItem = galleryElements[i];
//     setDetails(currentGalleryItem);
//   });
// }

galleryElements.forEach((galleryElement) => {
  galleryElement.addEventListener("click", function () {
    setDetails(galleryElement);
  });
});
