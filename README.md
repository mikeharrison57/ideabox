# IdeaBox

## Context and Features

- IdeaBox is a web application that my fellow collaborators and I created from the ground up. It involves the creation and propagation of  idea instances via the use of textual input from the user, class instantiation, and the creation of brand new HTML elements using JavaScript. It is designed to help those with great ideas keep track of said ideas in a manageable and organized fashion. User’s are only able to save an idea after they have entered text into the “Title” and “Body” input boxes. Prior to doing so, the “Save” button will issue an alert telling them they are unable to save an idea until their textual input has been registered.  Users are also able to delete said ideas with the click of a delete icon on our mini idea boxes. Our final suite of features added the ability to favorite certain ideas by clicking the star icon on said ideas. To only display favorite ideas, users can click the “Show Starred Ideas” button. Clicking the button also changes the text on the button to “Show All Ideas”. Clicking the “Show Ideas Button” will display all of the ideas again. We look forward to all of the amazing ideas our user’s will create and come up with using IdeaBox.

## Illustrations

#### Provided Comp Image

![ideabox-comp](https://user-images.githubusercontent.com/95496577/163694687-3cb13ddd-88e9-4105-a623-d4565bec4cc4.jpeg)

#### Our Application Video

![Demo](.IdeaBox.gif)

## Deployed Page

- Link to our deployed page [here](https://mikeharrison57.github.io/ideabox/)

## Technologies Used

- HTML
- CSS
- JavaScript

## Lessons Learned

- This application required my contributors and I to apply much of our prior knowledge in HTML, CSS, and JavaScript. However, it also provided us an opportunity to put brand new concepts and skills to the test. Setting up the initial comp for this project was no small task. It required extensive use and manipulation of the page with flex-box attributes, applying multiple different colors and fonts, and some brand new CSS concepts that some of us had never had exposure to before. We established custom properties within our CSS to help us manage the various different colors we had to use to reflect the provided comp. We also selected certain elements by their ID and others by class name. With our save button in particular, this allowed us to establish multiple classes and hover selectors to apply to our save button based on the presence of user input.

- Our two JavaScript files included an Idea class file and a main.js file. The idea class file contained a JavaScript class named Idea. It included multiple properties, and one functional method. We made great use of this class by using it to create new ideabox instances. Creating these instances also required querying many HTML nodes, and updating the inner HTML of our web page. A few things that were particularly challenging were figuring out how to go about targeting events for the two different icons on our idea boxes, and trying to have just the starred ideas displayed on our page at the click of a button. Accomplishing these tasks required revisiting some of our lessons on connecting the data model to the DOM, and event bubbling and delegation. It also required some additional research, and consulting our colleagues, rocks, and mentors for assistance. Through this process, we discovered things such as the `element.closest()` method, the array prototype `findIndex()`, and new ways to manipulate our HTML and CSS. This in combination with our prior knowledge of conditionals, `for` loops, functions, and event listeners allowed us to overcome these challenges together, and deliver a product we are all proud of.  

## Future Features

- Some future features that could be implemented into this page are:
The ability to search for ideas using the search bar to filter ideas via textual content.

- Adding comments to ideas.

- The ability to save ideas locally.

## Running Application Locally

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

3. `Cd` into the directory.

4. Run `open index.html` in your terminal.

### Contributor LinkedIn Profiles

- [Trish Fox-Collis](https://www.linkedin.com/in/trish-fox-collis/)
- [Neil Linton](https://www.linkedin.com/in/neil-b-linton/)
- [Michael Harrison](https://www.linkedin.com/in/michael-j-harrison57/)   

### Other Work From Our Contributors

- [Trish Fox-Collis](https://github.com/tfoxcollis)
- [Neil Linton](https://github.com/LINTONBNEIL)
- [Michael Harrison](https://github.com/mikeharrison57)

### Project Specs

- The spec for this application can be found [here](https://frontend.turing.edu/projects/module-1/ideabox-group-v2.html)
