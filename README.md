# DOM Manipulation

## Goals
- _Big picture goal_: Use javascript to make a webpage interactive
1. What is the DOM?
1. Use javascript to select elements from our DOM
1. Attach event listeners to our DOM elements
1. Manipulate the classes of our elements

## What is the DOM?

## Phase 0: linking your js and css files


## Phase 1: Selecting DOM elements with javascript
We already know about selecting elements of our HTML with CSS selectors, so that we can give them the styling of our choice. You can also select elements with javascript functions, which will allow us to do more than just change their styling.

Here are the big 5 functions you should know for selecting elements:
- `document.querySelector`: This function takes as an argument a _query string_, which you're already used to from working with CSS selectors. It always returns the first element on the page that meets its criteria. So for example:
  - `document.querySelector('h2')` would give you the first `<h2>` element that appears on the page
  - `document.querySelector('.fancy')` would give you the first element on the page that has a class of `fancy`
  - `document.querySelector('#hero-image')` would give you the first element on the page that has an id of `hero-image`
- `document.querySelectorAll`: This is just like `document.querySelector`, except it finds _all_ the elements on the page that meet its criteria. It will return them in an array.
- `document.getElementsByTagName`: This will give you all the elements that have the tag name you specify, for example `document.getElementsByTagName('h2')`
- `document.querySelector`: This will give you all the elements that have the class you specify, for example `document.getElementsByClassName('fancy')`. Note that there is no `.` at the start of that string!
- `document.querySelector.getElementById`: This will give you just one element that has the id you specify, for example `document.getElementById('hero-image')`. Note that there is no `#` at the start of that string! Why do you think this function returns 1 element while the above 2 return arrays of elements?

Get some practice with selecting DOM elements by following the phase 1 prompts in `script.js`!


## Phase 2: Attaching event listeners
Once you've selected a DOM element, you can attach an _event listener_ to it. For practice, we're going to attach an event listener to the home section:
```js
const homeSection = document.querySelector('#home-content')
homeSection.addEventListener('click', () => {
  console.log('you clicked the home section!')
})
```
Look at the anatomy of this:
1. The thing we call `addEventListener` on must be a piece of the DOM
1. The first argument to `addEventListener` is a string that specifies what kind of event we want to work with. Try changing it to `'mouseenter'` to see another kind of event
1. The second argument to `addEventListener` is a callback function that gets invoked any time the event happens. Any code that you put in this function body will run!

Follow the phase 2 prompts in `script.js`!

## Phase 2b: attaching event listeners dynamically
Hard-coding 3 separate listeners onto our 3 separate links isn't ideal: it's repetitive, and if we ever want to add more links in the future, we have to remember to add listeners for them.

Here's a way to add a listener to every link:
```js
const allNavLinks = document.querySelectorAll('.nav-link')

for (let i = 0; i < allNavLinks.length; i++) {
  allNavLinks[i].addEventListener('click', () => {
    console.log('you clicked a nav link!')
  })
}
```
But how do we make this log the name of the specific link that was clicked? To do this, we need to set up our callback function to accept a parameter. Once we do, that parameter will contain information about which thing was clicked. It's conventional to call this parameter `event`. The `event` parameter contains tons of info, but today we care about the `event.target`, which will be the DOM element that got clicked on.

## Phase 3: manipulating our sections
Let's do a little setup: create a new css class called `hidden`, that confers the property `display: none;`. We want the page to start with the Home section displayed, so add this class to all the other sections.

Also, notice the `selected` class in our css file: when combined with the `nav-link` class, it will turn that link purple instead of blue. Apply this class to the Home link, so that it starts off selected.

Whenever a nav link is clicked, we want to:
1. Turn that link purple, and all other links blue
1. Reveal the section associated with that link, and hide all other sections

The main tool you'll need for this is an element's `classList`: https://www.w3schools.com/jsref/prop_element_classlist.asp

## Phase 3b: handling our nav links dynamically
The most important thing at this point is getting your link navigation to work. But once it's working, it would be nice if we could avoid hardcoding all 3 listeners!
