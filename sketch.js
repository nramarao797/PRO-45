var canvas, backgroundImage;
var questions;
var contestant,quiz,question;




function preload(){
    backgroundImage= loadImage("assets/background.jpg");
}


function setup(){
    

canvas = createCanvas(1400,1150);
database= firebase.database();

quiz= new Quiz();
quiz.start();

}
function draw(){
    background(backgroundImage);

}






