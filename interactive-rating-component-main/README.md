# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshots

![](./result_screenshots/desktop_screenshot.png)
![](./result_screenshots/desktop_screenshot-thank-you.png)

![](./result_screenshots/mobile_screenshot.png)
![](./result_screenshots/mobile_screenshot-thank-you.png)


## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS3 with using custom properties
- Vanilla JS
- Flexbox

### What I learned

In this challenge, I used a classic Frontend stack:  HTML5, CSS3, and JS with a few advanced features such as CSS custom properties and Flexbox layout. I used the :root CSS pseudo-class to set my base styles, such as typography, colors, border-radius, etc. But the most interesting thing which I'm not very proud of that I used these custom variables for modifying pseudo-element with JS, because I didn't know that pseudo-elements are not considered parts of a DOM, so you can't directly manipulate them using API methods, so instead of changing my HTML layout I continued playing with my JavaScript, yet I glad that this worked out for me in this case.

