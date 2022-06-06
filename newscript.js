// Multiple Choice Q&A 

let q_a = [
  {
  question: "What does CSS stand for?",
  choice: ["Cascading Serial Sheet", "Computed Style Sheet", "Cascading Style Sheet", "Computed Serial Sheet"],

  correctA: "Cascading Style Sheet",

},
{

  question: "What is the proper way to link a Javascript file?",

  choice: ["<script></<script>", "<scriptss></scripts>", "<script href= ></script", "<script src= ><script>"],

  correctA: "<script src= ><script>",

},
{

  question: "What does HTML stand for?",

  choice: ["Hotmail", "<Hypertext Markup Language", "<Hyper Text Make up Language", "Hot Text Makeup Language"],

  correctA: "<Hypertext Markup Language",

},
{

  question: "Which of the following is NOT a Variable?",

  choice: ["var", "let", "const", "object"],

  correctA: "object",

}
];

// Start Section
let start = document.querySelector('#start');

//what happens when 'START' button is clicked 
start.addEventListener('click',()=>{
  start.style.display = "none";
  quiz.style.display = "block";
});

// Quiz Section 
let quiz = document.querySelector('#quiz');
let time = document.querySelector('#time');
let timer = q_a.length * 15;

function startGame(){
  
}
