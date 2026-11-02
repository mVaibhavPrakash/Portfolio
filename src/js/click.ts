import type { Dispatch, MouseEvent, SetStateAction } from 'react';
const click = (event: MouseEvent<HTMLDivElement>, toggle: string, setToggle: Dispatch<SetStateAction<string>>) => {
  event.preventDefault();
  setToggle(toggle === '' ? 'Active' : '');
};
export default click;
