const Carousel = (windowSize, startingIndex) => {
  const skills = document.getElementsByClassName('skills-icon');
  const rightBtn = document.getElementById('carousel-right-btn');
  const leftBtn = document.getElementById('carousel-left-btn');
  const total = skills.length;
  let startIndex = startingIndex;
  let prev = startIndex;
  let rightDisabled = false;
  let leftDisabled = false;
  return (Count) => {
    prev = startIndex;
    startIndex += Count;
    console.log(prev, startIndex);
      if (leftDisabled && startIndex > prev) {
        leftBtn.disabled = false;
      }if (rightDisabled && startIndex < prev) {
        rightBtn.disabled = false;
      }
        if (total - startIndex === windowSize) {
          rightBtn.disabled = true;
          rightDisabled = true;
        } if (startIndex <= 0) {
          leftBtn.disabled = true;
          leftDisabled = true;
        }
        for (let i = startIndex; i < startIndex + windowSize; i++) {
          skills[i].style.display = 'unset';
        }
        if (startIndex > prev) {
          skills[startIndex - 1].style.display = 'none';
          console.log(skills[startIndex - 1]);
        } else {
          skills[startIndex + windowSize].style.display = 'none';
          console.log(startIndex + windowSize);
        }
  };
};

export default Carousel;
