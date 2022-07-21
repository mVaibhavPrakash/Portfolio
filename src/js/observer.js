const callback = (entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.className === 'intro-p') {
        entry.target.className = 'active-p';
      } else {
        console.log(entry.target);
        entry.target.className = 'active';
      }

      observer.unobserve(entry.target);
    }
  });
};

const option = {
  threshold: 1,
};

console.log(window.screen.width);
option.rootMargin = window.screen.width < '570' ? '500px' : '300px';
console.log(option.rootMargin);

const observer = new IntersectionObserver(callback, option);

observer.observe(document.getElementsByClassName('intro')[0]);
observer.observe(document.getElementsByClassName('intro-p')[0]);
observer.observe(document.getElementsByClassName('about')[0]);
observer.observe(document.getElementsByClassName('experience')[0]);
