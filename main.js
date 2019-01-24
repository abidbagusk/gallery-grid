// script for create normal div
const wrapper = document.querySelector('.wrapper');
// 1. catch button id
const addDiv = document.getElementById('add-small-div');
// 2. add Event to the button
addDiv.addEventListener('click', function () {
    // 2.1 catch the parent of the element. the parent has been catch out of this function
    // const container = document.querySelector('.container');
    // 2.2 create new small div
    const smallDiv = document.createElement('div');
    // 2.3 create image
    const image = document.createElement('img');
    image.setAttribute('src', 'https://source.unsplash.com/random');
    image.classList.add('image-grid');
    // 2.4 fill image to div
    smallDiv.appendChild(image);
    // 2.5 save to parent
    wrapper.appendChild(smallDiv);
});