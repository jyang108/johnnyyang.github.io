var mainDiv = document.querySelector("#main");
var timer = document.querySelector("#timer")


// New Elements
var playDiv = document.createElement("div");
var h1 = document.createElement("h1");
var p = document.createElement("p");
var startBtn = document.createElement("button");
var optionOne = document.createElement("button");
var optionTwo = document.createElement("button");
var optionThree = document.createElement("button");
var optionFour = document.createElement("button");



function startSlide() {

   playDiv.className = "col-md-12 bg-dark text-center";
   playDiv.setAttribute("style", "margin: auto;");
   startBtn.className = "btn btn-primary mb-3";

   mainDiv.appendChild(playDiv);
   playDiv.appendChild(h1);
   playDiv.appendChild(p);
   playDiv.appendChild(startBtn);
   h1.textContent = "It's Trivia Time!";
   p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   startBtn.textContent = "Start Trivia";
};

startSlide()