// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsdu6XTBxvd-Oz-4jYf1nnAWCfzGiW0s0",
  authDomain: "quiz-app-7c66e.firebaseapp.com",
  projectId: "quiz-app-7c66e",
  storageBucket: "quiz-app-7c66e.appspot.com",
  messagingSenderId: "1040492782238",
  appId: "1:1040492782238:web:96d5aa087b3fc829b9518f",
  measurementId: "G-JZ02WBEBXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase()

var inp = document.getElementById("inp")

window.add = function(){
    console.log(inp.value);

    var reference = ref(database, 'quiz/')

    var obj = {
        quiz:inp.value,    
    };

    set(reference, obj)
}




var questions = [
    {
        question: "HTML Stands For _____________",
        Options: ["Hyper Text Markup Language","HTML","HTML","HTML"],
        correctAns: "Hyper Text Markup Language",
    },
    {
        question: "CSS Stands For _____________",
        Options: ["Cascading Style Sheet","CSS","CSS","CSS"],
        correctAns: "Cascading Style Sheet",
    },
    {
        question: "JS Stands For _____________",
        Options: ["Java Script ","JS","JS","JS"],
        correctAns: "Java Script",
    },
    {
        question: "RAM Stands For _____________",
        Options: ["Random Acess Memory","RAM","RAM","RAM"],
        correctAns: "Random Acess Memory",
    },
    {
        question: "ROM Stands For _____________",
        Options: ["Read Only Memory","ROM","ROM","ROM"],
        correctAns: "Read Only Memory",
    },
    {
        question: "HTML is a Programming Language:",
        Options: ["True","False"],
        correctAns: "True",
    },

];


var displayQuestion = document.getElementById("displayQuestion");
var optionParent = document.getElementById("optionParent");
var currentuestionNumber = document.getElementById("currentuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var progressBar = document.getElementById("progressBar");
var showResult = document.getElementById("showResult");
var showQuestion = document.getElementById("showQuestion");
var indexVal = 0;
var marks = 0;

function renderQuestion() {
    displayQuestion.innerHTML = questions[indexVal].question;
    for (var i = 0; i < questions[indexVal].Options.length; i++){
        optionParent.innerHTML += '<div class="col-md-6 py-3">
        <button
        class="btn w-100 rounded-pill shadow bg-white fw-bold"
        >
            ${questions[indexVal].options[i]}
            </button>
            </div>' ;
    }
    totalQuestionNumber.innerHTML = questions.length;
    currentuestionNumber.innerHTML = indexVal + 1;
}
renderQuestion();

function nextQuestion(){
    optionParent.innerHTML = "";
    if (indexVal + 1 == questions.length){
        console.log("Your Marks is",marks);
    } else {
        indexVal++;
        renderQuestion();
    }
}






