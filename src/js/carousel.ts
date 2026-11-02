const Carousel = (windowSize: number, startingIndex: number) => {
  const skills = document.querySelectorAll<HTMLElement>('.skills-icon');
  const rightBtn = document.querySelector<HTMLButtonElement>('#carousel-right-btn');
  const leftBtn = document.querySelector<HTMLButtonElement>('#carousel-left-btn');
  let startIndex = startingIndex;
  const update = () => {
    skills.forEach((skill, index) => {
      skill.style.display = index >= startIndex && index < startIndex + windowSize ? 'unset' : 'none';
    });
    if (leftBtn) leftBtn.disabled = startIndex === 0;
    if (rightBtn) rightBtn.disabled = startIndex >= skills.length - windowSize;
  };
  update();
  return (count: number) => {
    startIndex = Math.max(0, Math.min(Math.max(0, skills.length - windowSize), startIndex + count));
    update();
  };
};
export default Carousel;
