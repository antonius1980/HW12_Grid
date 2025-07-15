
document.addEventListener('DOMContentLoaded', function () {
  // Вешаем обработчик на все кнопки "Download"
  document.querySelectorAll('.gal__download').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // Находим ближайший родительский .gal__item
      const galItem = button.closest('.gal__item');

      if (!galItem) return;

      // Находим ссылку на большое изображение внутри текущего блока
      const imageLink = galItem.querySelector('.gal__image-link');

      if (imageLink && imageLink.href) {
        // Создаем временную ссылку для скачивания
        const a = document.createElement('a');
        a.href = imageLink.href;
        a.download = imageLink.href.split('/').pop(); // имя файла = последнее из пути
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Вешаем обработчик на все кнопки "Like"
  document.querySelectorAll('.gal__like').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      button.classList.toggle('liked');
    });
  });
});