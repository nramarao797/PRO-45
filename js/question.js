class Question{
    constructor(){
        this.title = createElement("h1");
        this.input1 = createInput("Enter your name here");
        this.button = createButton("Submit");
        this.question = createElement("h3");
        this.option1 = createElement("h4")
        this.option2 = createElement("h4")
        this.option3 = createElement("h4")
        this.option4 = createElement("h4")
        this.message = createElement("h2")

    }

hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.message.hide();
}    
display(){
    this.title.html("VIKTORINA");
    this.title.position(600,300);
    this.input1.html("Enter your name here");
    this.input1.position(600,700);
    this.button.html("Submit");
    this.button.position(750,700);
    this.question.html("Question: HOW MANY STATES ARE THERE IN ASIA ?");
    this.question.position(600,500);
    this.option1.html("Option1: 32");
    this.option1.position(600,540);
    this.option2.html("Option2: 49");
    this.option2.position(600,560);
    this.option3.html("Option3: 52");
    this.option3.position(600,580);
    this.option4.html("Option4: 40");
    this.option4.position(600,600);

}
}