// Start Section
let start = document.querySelector('#start');

// Rules Section 
let guide = document.querySelector('#rules');
let exit = document.querySelector('#exit');
let continueBtn = document.querySelector('#continue');

// Quiz Section 
let quiz = document.querySelector('#quiz');
let time = document.querySelector('#time');

// question Section 
let questionNo = document.querySelector('#questionNo');
let questionText = document.querySelector('#questionText');

//Multiple Choices of Questions
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');

// correct and next button 
let total_correct = document.querySelector('#total_correct');
let next_question = document.querySelector('#next_question');

// Results Section 
let points = document.querySelector('#points');
let quit = document.querySelector('#quit');
let restart = document.querySelector('#restart');
let result = document.querySelector('#result');

// Get all H4 from Quiz Section 
let choice_que = document.querySelector('#choice_que');


let index = 0;
let timer = 0; 
let interval = 0;

// total points
let correct = 0;

// store answer value 
let UserAns = undefined;

//what happens when 'START' button is clicked 
start.addEventListener('click',()=>{
  start.style.display = "none";
  guide.style.display = "block";
});

//what happens when 'Exit' button is clicked 
exit.addEventListener('click',()=>{
  start.style.display = "block";
  guide.style.display = "none";
});

//  Creating Timer for Quiz 
let countDown = ()=>{
  if(timer===20){
    clearInterval(interval);
  }
  else{
    timer++;
    console.log(timer);
  }
}

// Multiple Choice Q&A 

let Q_A = [
  {
    question: "What does CSS stand for?",
  answers: "Cascading Serial Sheet", "Computed Style Sheet", "Cascading Style Sheet", "Computed Serial Sheet",

  correctA: "Cascading Style Sheet",

},

    question: "What is the proper way to link a Javascript file?",

  choice1: "<script></<script>",
  choice2: "<scriptss></scripts>",
  choice3: "<script href= ></script",
  choice4: "<script src= ><script>",
  answer: 4

},

    question: "What does HTML stand for?",

choice1: "Hotmail",
choice2: "<Hypertext Markup Language",
choice3: "<Hyper Text Make up Language",
choice4: "Hot Text Makeup Language",
answer: 2

},

    question: "Which of the following is NOT a Variable?",

choice1: "var",
choice2: "let",
choice3: "const",
choice4: "object",
answer: 4

}]







// Setinterval(countDown,1000);

let loadData = ()=>{
  questionNo.innertxt = index + 1 + ". ";
  questionText.innertxt = Q_A[index].question; 
}
