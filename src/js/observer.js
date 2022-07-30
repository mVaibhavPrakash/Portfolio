const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (Object.values(entry.target.classList).includes('skills-icon')) {
        entry.target.classList.add('active');
      } else if (entry.target.className === 'intro-p') {
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
observer.observe(document.getElementsByClassName('skill')[0]);
const icons = document.getElementsByClassName('skills-icon');

for (let i = 0; i < icons.length; i++) {
  observer.observe(icons[i]);
}
