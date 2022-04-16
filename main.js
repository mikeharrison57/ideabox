// Query Selectors
var ideaTitle = document.querySelector("#title");
var ideaBody = document.querySelector("#body");
var saveButton = document.querySelector("#save-button");
var ideaBox = document.querySelector(".idea-box");
var ideaForm = document.querySelector(".idea-form"); //listens to the enire form
var starButton = document.querySelector(".save-star");
var activeStarButton = document.querySelector(".active-star");

var showStarredButton = document.querySelector(".show-Btn");
var favoriteIdeaPage = document.querySelector(".favorite-idea-box");
// var miniIdeaInstances = document.querySelectorAll(".mini-idea");

// Idea Array
var ideas = [];

//Event listeners
saveButton.addEventListener("click", saveIdea);
ideaForm.addEventListener("change", enableSaveButton);
ideaBox.addEventListener("click", whatWasClicked);

showStarredButton.addEventListener("click", showFavoriteIdeas);

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
    console.log(ideas)
  }else {
  return alert("Please fill out all fields.")
  }
}

function appendIdeaToBox(idea) {
  var newIdeaMiniBox = `
  <article class="mini-idea" id="${idea.id}">
  <div class="mini-header">
  <img class="save-star" src="./assets/star.svg">
  <img class="active-star hidden" src="./assets/star-active.svg">
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

// find article closest to the click
// take unique ID number from article
// for loop array with ID # to locate instance
//call updateIdea on targeted instance
function whatWasClicked() {
  if(event.target.className === "delete-x"){
    deleteMiniIdea();
  }else if(event.target.className === "save-star" || event.target.className === "active-star"){
    addStarTrue();
  }
}

function addStarTrue() {
  var miniIdeaArticle = event.target.closest(".mini-idea");
  for(var i = 0; i < ideas.length; i++){
    if(ideas[i].id === miniIdeaArticle.id){
      ideas[i].updateIdea()
    }
  }
  miniIdeaArticle.classList.toggle('starred')
  miniIdeaArticle.querySelector('.save-star').classList.toggle("hidden");
  miniIdeaArticle.querySelector('.active-star').classList.toggle("hidden");
}

function changeStarredButton() {
  if (showStarredButton.innerText.includes('Starred')) {
    showStarredButton.innerText = 'Show All Ideas'
  } else if (showStarredButton.innerText.includes('All')) {
    showStarredButton.innerText = 'Show Starred Ideas'
  }
}

function showFavoriteIdeas() {
  var miniIdeaInstances = document.querySelectorAll(".mini-idea");
  for(var i = 0; i < miniIdeaInstances.length; i++) {
    if(miniIdeaInstances[i].className === "mini-idea starred") {
      miniIdeaInstances[i].style.display = ""
    } else {
      miniIdeaInstances[i].style.display = "none"
    }
  }
  changeStarredButton()
}

//trying to toggle between innerText on button
// not sure how yet?
// only want favorited cards on favorite-idea-box section
// how to make it just show those ideas there?
