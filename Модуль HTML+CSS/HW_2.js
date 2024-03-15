// Работа кнопки бургер-меню
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const burger = document.getElementById("burger");

    burger.addEventListener("click", function () {
        if (header.classList.contains("open")) {
            header.classList.remove("open");
            header.classList.add("close");
        } else {
            header.classList.remove("close");
            header.classList.add("open");
        }
    });

    // Закрытие меню при клике вне поля меню
    document.addEventListener("click", function (event) {
        const target = event.target;
        if (!burger.contains(target)) {
            header.classList.remove("open");
            header.classList.add("close");
        }
    });
});

// Секция About раздел со слайдером фото

const slider = document.querySelector('.about-images-wrapper');
const firstBtn = document.getElementById('first');
const secondBtn = document.getElementById('second');
const thirdBtn = document.getElementById('third');
const fourthBtn = document.getElementById('fourth');
const fifthBtn = document.getElementById('fifth');
const firstDot = document.querySelector('.dot-1');
const secondDot = document.querySelector('.dot-2');
const thirdDot = document.querySelector('.dot-3');
const fourthDot = document.querySelector('.dot-4');
const fifthDot = document.querySelector('.dot-5');
const nextImg = document.querySelector('.about-images');

let currentIndex = 0;


function updateSlider() {
    const newPosition = -currentIndex * (nextImg.clientWidth + 27);
    slider.style.transform = `translateX(${newPosition}px)`;

    // Показывать или скрывать кнопки в зависимости от положения слайдера
    if (currentIndex === 0) {
        firstDot.style.border = '1px solid #BB945F';
        firstDot.style.backgroundColor = '#BB945F';
        secondDot.style.border = '1px solid #0C0C0E';
        secondDot.style.backgroundColor = '#0C0C0E';
        thirdDot.style.border = '1px solid #0C0C0E';
        thirdDot.style.backgroundColor = '#0C0C0E';
        fourthDot.style.border = '1px solid #0C0C0E';
        fourthDot.style.backgroundColor = '#0C0C0E';
        fifthDot.style.border = '1px solid #0C0C0E';
        fifthDot.style.backgroundColor = '#0C0C0E';

        firstBtn.disabled = true;   // Делаем кнопку некликабельной
        secondBtn.disabled = false; // Разблокируем second кнопку
        thirdBtn.disabled = false;  // Разблокируем third кнопку
        fourthBtn.disabled = false; // Разблокируем fourth кнопку
        fifthBtn.disabled = false;  // Разблокируем fifth кнопку
    } else if (currentIndex === 1) {
        firstDot.style.border = '1px solid #0C0C0E';
        firstDot.style.backgroundColor = '#0C0C0E';
        secondDot.style.border = '1px solid #BB945F';
        secondDot.style.backgroundColor = '#BB945F';
        thirdDot.style.border = '1px solid #0C0C0E';
        thirdDot.style.backgroundColor = '#0C0C0E';
        fourthDot.style.border = '1px solid #0C0C0E';
        fourthDot.style.backgroundColor = '#0C0C0E';
        fifthDot.style.border = '1px solid #0C0C0E';
        fifthDot.style.backgroundColor = '#0C0C0E';

        firstBtn.disabled = false;
        secondBtn.disabled = true;
        thirdBtn.disabled = false;
        fourthBtn.disabled = false;
        fifthBtn.disabled = false;
    } else if (currentIndex === 2){
        firstDot.style.border = '1px solid #0C0C0E';
        firstDot.style.backgroundColor = '#0C0C0E';
        secondDot.style.border = '1px solid #0C0C0E';
        secondDot.style.backgroundColor = '#0C0C0E';
        thirdDot.style.border = '1px solid #BB945F';
        thirdDot.style.backgroundColor = '#BB945F';
        fourthDot.style.border = '1px solid #0C0C0E';
        fourthDot.style.backgroundColor = '#0C0C0E';
        fifthDot.style.border = '1px solid #0C0C0E';
        fifthDot.style.backgroundColor = '#0C0C0E';

        firstBtn.disabled = false;
        secondBtn.disabled = false;
        thirdBtn.disabled = true;
        fourthBtn.disabled = false;
        fifthBtn.disabled = false;
    } else if (currentIndex === 3) {
        firstDot.style.border = '1px solid #0C0C0E';
        firstDot.style.backgroundColor = '#0C0C0E';
        secondDot.style.border = '1px solid #0C0C0E';
        secondDot.style.backgroundColor = '#0C0C0E';
        thirdDot.style.border = '1px solid #0C0C0E';
        thirdDot.style.backgroundColor = '#0C0C0E';
        fourthDot.style.border = '1px solid #BB945F';
        fourthDot.style.backgroundColor = '#BB945F';
        fifthDot.style.border = '1px solid #0C0C0E';
        fifthDot.style.backgroundColor = '#0C0C0E';

        firstBtn.disabled = false;
        secondBtn.disabled = false;
        thirdBtn.disabled = false;
        fourthBtn.disabled = true;
        fifthBtn.disabled = false;
    } else if (currentIndex === 4) {
        firstDot.style.border = '1px solid #0C0C0E';
        firstDot.style.backgroundColor = '#0C0C0E';
        secondDot.style.border = '1px solid #0C0C0E';
        secondDot.style.backgroundColor = '#0C0C0E';
        thirdDot.style.border = '1px solid #0C0C0E';
        thirdDot.style.backgroundColor = '#0C0C0E';
        fourthDot.style.border = '1px solid #0C0C0E';
        fourthDot.style.backgroundColor = '#0C0C0E';
        fifthDot.style.border = '1px solid #BB945F';
        fifthDot.style.backgroundColor = '#BB945F';

        firstBtn.disabled = false;
        secondBtn.disabled = false;
        thirdBtn.disabled = false;
        fourthBtn.disabled = false;
        fifthBtn.disabled = true;
    }

}

// Перелистывание картинок вправо
function goToRightDot() {
    currentIndex += 1;
    updateSlider();
}

firstBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateSlider();
    }
});

secondBtn.addEventListener('click', () => {
    if (currentIndex < 1) {
        goToRightDot();
    }
});

thirdBtn.addEventListener('click', () => {
    if (currentIndex < 2) {
        goToRightDot();
    }
});

fourthBtn.addEventListener('click', () => {
    if (currentIndex < 3) {
        goToRightDot();
    }
});

fifthBtn.addEventListener('click', () => {
    if (currentIndex < 4) {
        goToRightDot();
    }
});



const imagesWrapper = document.querySelector('.about-images-wrapper');
const images = document.querySelectorAll('.about-images');
const leftButton = document.querySelector('.carret-left');
const rightButton = document.querySelector('.carret-right');
let currentIndex1 = 0;

rightButton.addEventListener('click', () => {
    if (currentIndex1 < images.length - 1) {
        currentIndex1++;
        updateImagePosition();
    }
});

leftButton.addEventListener('click', () => {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateImagePosition();
    }
});

function updateImagePosition() {
    const translateX = -currentIndex1 * 100; // 100% for each image
    imagesWrapper.style.transform = `translateX(${translateX}%)`;
}



updateSlider();