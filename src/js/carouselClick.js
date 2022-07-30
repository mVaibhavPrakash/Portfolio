const carouselClick = (e,Index,InnerCarousel) =>{
    e.preventDefault();
    InnerCarousel.current(Index)
}

export default carouselClick;