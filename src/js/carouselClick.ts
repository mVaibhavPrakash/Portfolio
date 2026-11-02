import type { MouseEvent, RefObject } from 'react';
const carouselClick = (event: MouseEvent<HTMLButtonElement>, index: number, carousel: RefObject<((count: number) => void) | null>) => {
  event.preventDefault();
  carousel.current?.(index);
};
export default carouselClick;
