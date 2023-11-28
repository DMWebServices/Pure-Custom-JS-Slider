//  Target Slider 
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

//  Target Slider Navigation, Btns and Dots
//  Btns
const prevBtn = document.querySelector('#carousel__btn--prev');
const nextBtn = document.querySelector('#carousel__btn--next');

//  Dots
const dotsNav = document.querySelector('.carousel_dots');
const slide = Array.from(dotsNav.children);

//  Length, Height and Width of Each Slide
const slideWidth = slides[0].getBoundingClientRect().width;

//  Arrange Slides
const setSlidePosition = (slide, index) => { 
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

//  Btn Movement
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left;  + ')';
    currentSlide.classList.remove('active');
    targetSlide.classList.add('active');
}

//  Prev Btn
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.active');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

//  Next Btn
nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.active');
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
});

//  Nav Dots Movement