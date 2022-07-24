const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.className === 'intro-p') {
        entry.target.className = 'active-p';
      } else {
        entry.target.className = 'active';
      }

      observer.unobserve(entry.target);
    }
  });
};

const option = {
  threshold: 0.5,
  rootMargin: '500px',
};

const observer = new IntersectionObserver(callback, option);

observer.observe(document.getElementsByClassName('intro')[0]);
observer.observe(document.getElementsByClassName('intro-p')[0]);
observer.observe(document.getElementsByClassName('about')[0]);
observer.observe(document.getElementsByClassName('experience')[0]);
observer.observe(document.getElementsByClassName('sidenav')[0]);
observer.observe(document.getElementsByClassName('sidenav')[1]);
