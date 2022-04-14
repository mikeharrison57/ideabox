// Query Selectors
var ideaTitle = document.querySelector("#title");
var ideaBody = document.querySelector("#body");
var saveButton = document.querySelector("#save-button");
var ideaBox = document.querySelector(".idea-box");
var ideaForm = document.querySelector(".idea-form"); //listens to the enire form
var starButton = document.querySelector(".save-star");
var activeStarButton = document.querySelector(".active-star");

// Idea Array
var ideas = [[]];

//Event listeners
saveButton.addEventListener("click", saveIdea);
ideaForm.addEventListener("change", enableSaveButton);
ideaBox.addEventListener("click", deleteMiniIdea);
starButton.addEventListener("click", changeStar);
activeStarButton.addEventListener("click", changeStarBack);


//Functions
function disableSaveButton() {
  saveButton.disable = true;
  saveButton.classList.remove("save");
  saveButton.classList.add("save-cursor");
}

function enableSaveButton() {
  if(ideaTitle.value && ideaBody.value) {
    saveButton.disable = false;
    saveButton.classList.add("save");
    saveButton.classList.remove("save-cursor");
  } else {
    disableSaveButton();
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
  <img class="save-star" src="./assets/star.svg">
  <img class="delete-x" src="./assets/delete.svg">
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


function deleteMiniIdea() {
  if(event.target.className === "delete-x"){
    var miniIdea = event.target.closest(".mini-idea");
    var index = ideas.findIndex(idea => idea.id === miniIdea.id)
    ideas.splice(index, 1);
    miniIdea.remove()
  }
}

function changeStar() {
  starButton.classList.add("hidden");
  activeStarButton.classList.remove("hidden");
}

function changeStarBack() {
  activeStarButton.classList.add("hidden");
  starButton.classList.remove("hidden");
}
