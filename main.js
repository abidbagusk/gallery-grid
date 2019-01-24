// script for create normal div
const container = document.querySelector('.container');
// 1. catch button id
const addDiv = document.getElementById('add-small-div');
// 2. add Event to the button
addDiv.addEventListener('click', function () {
    // 2.1 catch the parent of the element. the parent has been catch out of this function
    // const container = document.querySelector('.container');
    // 2.2 create new small div
    const smallDiv = document.createElement('div');

});