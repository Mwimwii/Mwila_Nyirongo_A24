## Answers

###JS:

What is your favourite new javascript feature and why?
- String.prototype.replaceAll which replaces all occurrences of a certain character. This reduces the need to use strip() in order to remove a certain character in a string.

Explain an interesting way in which you have used this javascript feature.
- In certain cases, it may be necessary to display user input to the user in a formatted way, while still storing the raw data in a specific format. String.prototype.replaceAll() can be used to transform user input from its formatted representation to the desired raw format for storage. 

Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)

- Yes, both are different in syntax and functionality
- The regular function syntax bind the `this` value to the object its bound to, whilst the arrow function relies on the context of which is being called on.

What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’

- `myFunctionCall(++foo)` increments foo before calling the function
- `myFunctionCall(foo++)` increments foo after returning the function


In your own words, explain what a javascript ‘class’ is and how it differs from a function.

- A class is blueprint to an object. It creates a new object by utilizing the new keyword. In javascript a class is a function, but unlike functions, a class specifies attributes of an object by using a contructor which is called when a new object is being created.

### CSS:

In your own words, explain css specificity.
This is the weight that refers to which style rules are to be applied. With styles applied to an element holding the lowest weight and inline styles being the highest.


In your own words, explain what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?

- !important overrides the css specificity weights on an applied value (`attribute: value !important). This could be used when


What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why
- I prefer to use the flex layout. It is simple, yet powerful system that does not have rely on fixed pixel values

Are negative margins legal and what do they do (margin: -20px)?
- I’m quite sure they should be since the value will be interpreted as numerical value. 


If a <div/> has no margin or other styling and a <p/> tag inside of it has a margin top of some kind, the margin from the <p/> tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?

- The margin-top from <p/> tag will override the parent tags margin: 0. To prevent this we can:
  - Apply an `margin: inherit !important` on the `<p/>` if we desire for the a margin of 0
  - Use a `display: float the  `<div/>` that will containerize the `margin-top` of the `<p/>`

### Unit tests:

What technologies do you use to unit test your react components?
- Jest

Are there any pitfalls associated with this technology that have caused you difficulty in the past?
- False Negatives 
How do you test in your unit tests to see if the correct properties are being passed to child components.
