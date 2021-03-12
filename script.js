console.log('hello from script.js');

// Phase 1: selecting elements
// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All section tags
const allSectionTags = document.querySelectorAll('section');
console.log(allSectionTags);

// 2) The first section tag
const firstSectionTag = document.querySelector("section");
console.log(firstSectionTag);


// 3) The element with an id of home-content
const homeContent = document.getElementById("home-content");
console.log(homeContent);

// 4) The element with an id of services-link


// 5) The first element with a class of nav-link
const navLink = document.querySelector(".nav-link");
console.log(navLink);


// 6) All elements with a class of nav-link
const allNavLinks = document.querySelectorAll(".nav-link");
console.log(allNavLinks);





// Phase 2: adding event listeners
// Add an event listener to each of the nav links
// In the callback function of each listener, console.log which link was clicked
for (let i = 0; i < allNavLinks.length; i++){
    const currentLink = allNavLinks[i];

    currentLink.addEventListener('click', () => {
     turnBlue();
     currentLink.classList.add("selected")
     console.log('you clicked a nav link!')
    })
  }



// Phase 3: 
// When a nav link is clicked,
// a) turn that link purple, and all other links blue

const turnBlue = () => {
for (let i = 0; i < allNavLinks.length; i++){
  allNavLinks[i].classList.remove("selected");
}
}
  
// b) reveal the section associated with that link, and hide all other sections. Hint: you might want to use the String.replace method to turn a string like home-link into home-content, which you can then use as an id selector

// Use the <whichever element>.classList.add and <whichever element>.classList.remove

