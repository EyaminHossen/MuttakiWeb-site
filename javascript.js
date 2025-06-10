const left = document.querySelector('.left');
const Right = document.querySelector('.Right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
let slideNumber = 1;
const length = images.length;
const nextslide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++;
}
const prevslide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--;
}
const getFirstslide = ()=>{
    slider.style.transform = `translateX(-0px)`;
    slideNumber=1;
}
const getlastslide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px )`;
    slideNumber=length;
}
Right.addEventListener('click',()=>{
    slideNumber < length ?nextslide(): getFirstslide();
    
    
});
left.addEventListener('click',()=>{
    slideNumber >1 ?prevslide(): getlastslide();
    
    
});