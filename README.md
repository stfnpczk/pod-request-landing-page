# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

<br />

![](./assets/preview.jpg)
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"



### Links

- [Frontend Mentor - solution URL](https://www.frontendmentor.io/solutions/pod-request-access-landing-page-w-ERCIuPP)
- [Live Demo](https://stfnpczk.github.io/pod-request-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- BEM notation
- Flexbox
- Mobile-first workflow



### What I learned

- I learned about the complicating factor of combining background-color and overlapping background images

<br>

- `email validation with regex and match`
```js
const checkEmail = (emailInput) => {
  return emailInput.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
}
```
### Useful resources

- [email validation --> emailregex.com](https://emailregex.com/)


## Author

- Frontend Mentor - [@stfnpczk](https://www.frontendmentor.io/profile/stfnpczk)