document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slides img');
  const newsContainer = document.querySelector('.news-container');
  const newsItems = Array.from(document.querySelectorAll('.news-item'));

  // Clone news items to create a seamless scroll
  newsItems.forEach(item => newsContainer.appendChild(item.cloneNode(true)));

  function showSlide() {
    slides.forEach((slide, index) => {
      slide.classList.remove('active');
      if (index === slideIndex) {
        slide.classList.add('active');
      }
    });
    slideIndex = (slideIndex + 1) % slides.length;
  }

  function scrollNews() {
    const firstItem = newsContainer.firstElementChild;
    const itemHeight = firstItem.offsetHeight;
    newsContainer.style.transition = 'transform 30s';
    newsContainer.style.transform = `translateY(-${itemHeight}px)`;

    setTimeout(() => {
      newsContainer.style.transition = 'none';
      newsContainer.style.transform = 'translateY(0)';
      newsContainer.appendChild(firstItem);
    }, 2000);
  }

  setInterval(showSlide, 3000);
  setInterval(scrollNews, 4000); // Adjust the interval as needed
});
