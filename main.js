// Query Selectors
var ideaTitle = document.querySelector("#title");
var ideaBody = document.querySelector("#body");
var saveButton = document.querySelector("#save-button");
var ideaBox = document.querySelector(".idea-box");
var ideaForm = document.querySelector(".idea-form"); //listens to the enire form

var ideas = [];

//Event listeners

saveButton.addEventListener("click", saveIdea)
ideaForm.addEventListener("change", enableSaveButton)

//Functions

function enableSaveButton() {
  if (ideaTitle.value && ideaBody.value) {
    saveButton.classList.remove("disable");
  }
}

function saveIdea() {
  event.preventDefault();
  var idea = new Idea(ideaTitle.value, ideaBody.value);
  if(ideaTitle.value && ideaBody.value){
    ideas.unshift(idea);
    appendIdeaToBox(idea);
    clearInput();
  }else {
  return alert("Please fill out all fields.")
  }
}

function appendIdeaToBox(idea) {
  var newIdeaMiniBox = `
  <article class="mini-idea" id="${idea.id}">
  <div class="mini-header">
  <img src="./assets/star.svg">
  <img src="./assets/delete.svg">
  </div>
  <div class="mini-body">
  <h3> ${idea.title} </h3>
  <p> ${idea.body}</p>
  </div>
  <div class="mini-footer">
  <img src="./assets/comment.svg">
  <h4>Comment</h4>
  </div>
  </article>
  `
ideaBox.innerHTML += newIdeaMiniBox // unshift only works when storing. this is putting the HTML at the end so the box is loading at the end.
}

function clearInput() {
  ideaTitle.value = "";
  ideaBody.value = "";
}
