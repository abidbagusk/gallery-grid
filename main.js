// script for create normal div
const wrapper = document.querySelector('.wrapper');

// ------------ Create Normal Content ---------------
// 1. catch button id
const addDiv = document.getElementById('add-small-div');
// 2. add Event to the button
addDiv.addEventListener('click', function () {
    // 2.1 catch the parent of the element. the parent has been catch out of this function
    // const container = document.querySelector('.container');
    // 2.2 create new small div
    const smallDiv = document.createElement('div');
    // add div-content as sign if user will click delete button
    smallDiv.classList.add('div-content');
    // 2.3 create image
    const image = document.createElement('img');
    image.setAttribute('src', 'https://source.unsplash.com/random');
    image.classList.add('image-grid');
    // 2.4 fill image to div
    smallDiv.appendChild(image);
    // 2.5 save to parent
    wrapper.appendChild(smallDiv);
});

// ------------ Create Big Content ------------------
// catch button id
const addDivBig = document.getElementById('add-big-div');
// add Event to the button
addDivBig.addEventListener('click', function () {
    // catch the parent of the element.
    // create new big div
    const bigDiv = document.createElement('div');

    // give bigDiv class to div
    bigDiv.classList.add('bigDiv', 'div-content');

    // create image
    const image = document.createElement('img');
    image.setAttribute('src', 'https://source.unsplash.com/random');
    image.classList.add('image-grid');

    // put image to bigDiv
    bigDiv.appendChild(image);

    // save to parent
    wrapper.appendChild(bigDiv);
});

// ------------- Create Width Content -------------------
const addDivWidth = document.getElementById('add-length-div');
addDivWidth.addEventListener('click', function () {
    // create div elemen
    const divWidth = document.createElement('div');
    divWidth.classList.add('widthDiv', 'div-content');

    // create image element
    const image = document.createElement('img');
    image.setAttribute('src', 'https://source.unsplash.com/random');
    image.classList.add('image-grid');

    // put image to divWidth
    divWidth.appendChild(image);

    // save to parent
    wrapper.appendChild(divWidth);

});

// --------------- Create Height Content -----------------
const addDivHeight = document.getElementById('add-height-div');
addDivHeight.addEventListener('click', function () {
    // create div element
    const divHeight = document.createElement('div');
    divHeight.classList.add('heightDiv', 'div-content');

    // create image element
    const image = document.createElement('img');
    image.setAttribute('src', 'https://source.unsplash.com/random');
    image.classList.add('image-grid');

    // put image to the div
    divHeight.appendChild(image);

    // save to parent
    wrapper.appendChild(divHeight);

});


// ------------- Create Function to Delete item --------------
// catch button delete
const deleteDiv = document.getElementById('delete-div');
deleteDiv.addEventListener('click', function () {
    const newDiv = document.getElementsByClassName('div-content')[0];
    wrapper.removeChild(newDiv);
})