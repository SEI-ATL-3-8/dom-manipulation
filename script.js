console.log('hello from script.js');

// Phase 1: selecting elements
// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All section tags
const allSections = document.querySelectorAll('section')
// console.log(allSections);
// 2) The first section tag
// 3) The element with an id of home-content
// 4) The element with an id of services-link
// 5) The first element with a class of nav-link
// 6) All elements with a class of nav-link


// Phase 2: adding event listeners
// Add an event listener to each of the nav links
// In the callback function of each listener, console.log which link was clicked


// const homeLink = document.querySelector('#home-link')

// homeLink.addEventListener('click', () => {
//   console.log('you clicked the home link!');
// })

// document.querySelector('#about-link').addEventListener('click', () => {
//   console.log('you clicked the about link!')
// })

// document.querySelector('#procedures-link').addEventListener('click', () => {
//   console.log('you clicked the procedures link!');
// })

// const allLinks = document.querySelectorAll('.nav-link')

// for (let i = 0; i < allLinks.length; i++) {
//   allLinks[i].addEventListener('click', (event) => {
//     const linkName = event.target.id
//     console.log(`You clicked the ${linkName}!`);
//   })
// }






// Phase 3: 
// When a nav link is clicked,
// a) turn that link purple, and all other links blue
// b) reveal the section associated with that link, and hide all other sections. Hint: you might want to use the String.replace method to turn a string like home-link into home-content, which you can then use as an id selector

// Use the <whichever element>.classList.add and <whichever element>.classList.remove




// handling the purplization of links
document.querySelector('#home-link').addEventListener('click', () => {
  document.querySelector('#home-link').classList.add('selected')
  document.querySelector('#about-link').classList.remove('selected')
  document.querySelector('#procedures-link').classList.remove('selected')
})

document.querySelector('#about-link').addEventListener('click', () => {
  document.querySelector('#about-link').classList.add('selected')
  document.querySelector('#home-link').classList.remove('selected')
  document.querySelector('#procedures-link').classList.remove('selected')
})

document.querySelector('#procedures-link').addEventListener('click', () => {
  document.querySelector('#procedures-link').classList.add('selected')
  document.querySelector('#home-link').classList.remove('selected')
  document.querySelector('#about-link').classList.remove('selected')
})

// handling the hiding of sections
document.querySelector('#home-link').addEventListener('click', () => {
  document.querySelector('#home-content').classList.remove('hidden')
  document.querySelector('#about-content').classList.add('hidden')
  document.querySelector('#procedures-content').classList.add('hidden')
})

document.querySelector('#about-link').addEventListener('click', () => {
  document.querySelector('#about-content').classList.remove('hidden')
  document.querySelector('#home-content').classList.add('hidden')
  document.querySelector('#procedures-content').classList.add('hidden')
})

document.querySelector('#procedures-link').addEventListener('click', () => {
  document.querySelector('#procedures-content').classList.remove('hidden')
  document.querySelector('#about-content').classList.add('hidden')
  document.querySelector('#home-content').classList.add('hidden')
})














