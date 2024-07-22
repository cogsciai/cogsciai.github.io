document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slides img');
  const newsContainer = document.querySelector('.news-container');
  const newsItems = Array.from(document.querySelectorAll('.news-item'));

  // Clone news items to create a seamless scroll
  newsItems.forEach(item => newsContainer.appendChild(item.cloneNode(true)));

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
    slideIndex = (index + 1) % slides.length;
  }

  function nextSlide() {
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  document.querySelector('.arrow.left').addEventListener('click', prevSlide);
  document.querySelector('.arrow.right').addEventListener('click', nextSlide);

  function scrollNews() {
    const firstItem = newsContainer.firstElementChild;
    const itemHeight = firstItem.offsetHeight;
    newsContainer.style.transition = 'transform 2s';
    newsContainer.style.transform = `translateY(-${itemHeight}px)`;

    setTimeout(() => {
      newsContainer.style.transition = 'none';
      newsContainer.style.transform = 'translateY(0)';
      newsContainer.appendChild(firstItem);
    }, 2000); // Transition duration
  }

  function startScrollingNews() {
    scrollNews();
    setInterval(scrollNews, 4000); // Adjust the interval to include transition time and delay
  }

  setInterval(nextSlide, 5000); // Change slides every 5 seconds
  setTimeout(startScrollingNews, 2000); // Initial delay before starting the news scroll
});
