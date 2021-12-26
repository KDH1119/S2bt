'use strict';

const homeImg = document.querySelectorAll('.home__img');
var i = 0;

function Imgslide() {

    i++;

    if(i >= 4) {
        homeImg[i-1].classList.value = 'home__img';
        i = 0;
    } else if(i > 0){
        homeImg[i-1].classList.value = 'home__img';
    }

    homeImg[i].classList.value = 'home__img active';
};

setInterval(Imgslide, 1500);