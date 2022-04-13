// Query slectors
var ideaTitle = document.querySelector("#title");
var ideaBody = document.querySelector("#body");
var saveButton = document.querySelector("#save-button");
var ideaBox = document.querySelector(".idea-box");

var ideas = [];

//Event listeners

saveButton.addEventListener("click", saveIdea)

//functions

function saveIdea() {
  event.preventDefault();
  var idea = new Idea(ideaTitle.value, ideaBody.value);
  ideas.unshift(idea);
}
