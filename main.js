'use strict';

const homeImg = document.querySelectorAll('.home__img');
var i = 0;

function Imgslide() {

    i++;

    if(i >= 4) {
        homeImg[i-1].classList.value = 'home__img';
        i = 0;
    }

    homeImg[i].classList.value = 'home__img active';
    homeImg[i-1].classList.value = 'home__img';
};

setInterval(Imgslide, 1500);