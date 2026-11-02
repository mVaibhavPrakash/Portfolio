export default function observeSections() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (entry.target.classList.contains('skills-icon')) {
        entry.target.classList.add('active');
      } else if (entry.target.className === 'intro-p') {
        entry.target.className = 'active-p';
      } else {
        entry.target.className = 'active';
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5, rootMargin: '500px' });
  document.querySelectorAll('.intro, .intro-p, .about, .experience, .sidenav, .skill, .projects, .skills-icon')
    .forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
