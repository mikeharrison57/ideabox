class Idea {
  constructor(title, body) {
    this.id = Date.now().toString();
    this.title = title;
    this.body = body;
    this.star = false;
  }
  updateIdea() {
    if(this.star === false) {
      this.star = true;
    } else {
      this.star = false;
    }
  }
  saveToStorage() {

  }
  deleteFromStorage() {

  }
}
