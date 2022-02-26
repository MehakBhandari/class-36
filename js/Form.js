class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementsPosition(){
    this.titleImg.position(120,80);
    this.input.position(width/2 -100,height/2-80);
    this.playButton.position(width/2-90,height/2-30);
    this.greeting.position(width/2-300,height/2-100)
  }

  setElementsstyle(){
    this.titleImg.class("gameTitle");
    this.playButton.class("customButton");
    this.input.class("customInput")
    this.greeting.class("greeting")
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = `Hello ${this.input.value()}
      </br>wait for another playes to join...`
      this.greeting.html(message)
    })
  }

  display(){
    this.setElementsPosition();
    this.setElementsstyle();
    this.handleMousePressed();
  }
}
