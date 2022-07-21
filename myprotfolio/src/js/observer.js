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

const observer = new IntersectionObserver(callback, {
  threshold: 1,
  rootMargin: '0px',
});

observer.observe(document.getElementsByClassName('intro')[0]);
observer.observe(document.getElementsByClassName('intro-p')[0]);
observer.observe(document.getElementsByClassName('about')[0]);
observer.observe(document.getElementsByClassName('experience')[0]);
