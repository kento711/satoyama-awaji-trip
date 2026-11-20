const dialog = document.querySelector('#image-dialog');
const expandedImage = document.querySelector('#expanded-image');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    expandedImage.src = button.dataset.image;
    expandedImage.alt = button.dataset.title;
    document.querySelector('#image-title').textContent = button.dataset.title;
    dialog.showModal();
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }
});
