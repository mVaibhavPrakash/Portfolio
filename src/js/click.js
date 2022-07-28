const click = (e, toggle, setToggle) => {
  e.preventDefault();
  if (toggle === '') {
    setToggle('Active');
  } else {
    setToggle('');
  }
};

export default click;
