// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const part1 = document.querySelector('.header-container')
part1.appendChild(Header())

function Header() {
const head = document.createElement('div')
const dates = document.createElement('span')
const title = document.createElement('h1')
const temperature = document.createElement('span')

head.classList.add('header')
dates.classList.add('date')
temperature.classList.add('temp')


const event = new Date();
dates.textContent = event
title.textContent = 'Lambda Times'
temperature.textContent = 98 

head.appendChild(dates)
head.appendChild(title)
head.appendChild(temperature)


return head

}

console.log(Header)


