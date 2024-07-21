document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slides img');
  const newsItems = document.querySelectorAll('.news-item');
  const newsContainer = document.querySelector('.news');

  function showSlide() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === slideIndex) {
        slide.classList.add('active');
      }
    });
    slideIndex = (slideIndex + 1) % slides.length;
  }

  function autoScrollNews() {
    let scrollAmount = 0;
    const newsHeight = newsContainer.scrollHeight;
    const containerHeight = newsContainer.clientHeight;

    setInterval(() => {
      scrollAmount += 2;
      if (scrollAmount >= (newsHeight - containerHeight)) {
        scrollAmount = 0;
      }
      newsContainer.scrollTop = scrollAmount;
    }, 100);
  }

  setInterval(showSlide, 3000);
  autoScrollNews();
});
