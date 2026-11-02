import image from '../img/vaibhav.png';
export default function animateHeading() {
  const text = document.querySelector<HTMLElement>('.deco');
  if (!text) return;
  const original = text.innerHTML;
  let line = 0;
  const fragment = document.createDocumentFragment();
  original.split(/(<br\s*\/?>)/i).forEach((part) => {
    if (/^<br/i.test(part)) {
      fragment.append(document.createElement('br'));
      line++;
      return;
    }
    for (const character of part) {
      const span = document.createElement('span');
      if (character === 'V') {
        span.id = 'break';
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'V';
        span.append(img);
      } else {
        span.textContent = character === ' ' ? '\u00a0' : character;
        if (character === ' ' && line === 2) span.className = 'break';
      }
      fragment.append(span);
    }
  });
  text.replaceChildren(fragment);
  const spans = text.querySelectorAll('span');
  let index = 0;
  const timer = window.setInterval(() => {
    spans[index]?.classList.add('fade');
    index++;
    if (index >= spans.length) window.clearInterval(timer);
  }, 50);
  return () => {
    window.clearInterval(timer);
    text.innerHTML = original;
  };
}
