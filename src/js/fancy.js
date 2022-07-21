const text = document.querySelector('.deco');
const strText = text.innerHTML;
const split = strText.split('');
text.textContent = '';

let i = 0;
let x = 0;
let br = 0;
while (i < split.length) {
  if (split[i] === '<') {
    text.innerHTML += '<br>';
    i += 4;
    br++;
  } else if (split[i] === ' ') {
    let char = '&nbsp;';
    if (br === 2) {
      text.innerHTML += '<span class="break">' + char + '</span>';
    } else {
      text.innerHTML += '<span>' + char + '</span>';
    }
    i++;
    x++;
  } else {
    if (split[i] === 'V') {
      text.innerHTML += '<span id="break">' + split[i] + '</span>';
    } else text.innerHTML += '<span>' + split[i] + '</span>';
    i++;
    x++;
  }
}

let char = 0;

let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if (char === x) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
