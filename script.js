const questions = [
    {  
       question : " Who gave Bhishma the born that he would die only when he wished ? ",
        answers : [
            {text:"Sage Vyasa",correct : false},
            {text:"Shantanu",correct : true},
            {text:"Sri Krishna",correct : false},
            {text:"Dronacharya",correct : false},
        ]
    },


    {  
        question : "What was the name of Gandhari's only daughter ? ",
         answers : [
             {text:"Ulupi",correct : false},
             {text:"Krishna",correct : false},
             {text:"Dussala",correct : true},
             {text:"Amba",correct : false},
         ]
     },



     {  
        question : "At the time of his birth, in the voice of which animal did Duryodhana cry ? ",
         answers : [
             {text:"Dog",correct : false},
             {text:"Ass",correct : true},
             {text:"Lion",correct : false},
             {text:"Wolf",correct : false},
         ]
     },



     {  
        question : "Who taught Arjuna the 'Brahmastra' ? ",
         answers : [
             {text:"Sri Krishna",correct : false},
             {text:"Sage Vyasya",correct : false},
             {text:"Mahadev",correct : false},
             {text:"Dronacharya",correct : true},
         ]
     },

     {  
        question : ". Who killed Jarasandha ? ",
         answers : [
             {text:"Yudhishtira",correct : false},
             {text:"Bhima",correct : true},
             {text:"Arjuna",correct : false},
             {text:"Sri krishna",correct : false},
         ]
     },

     {  
        question : "Who was the mother of Ghadotkacha ? ",
         answers : [
             {text:"Satyavati",correct : false},
             {text:"Nala",correct : false},
             {text:"Dussala",correct : false},
             {text:"Hidimbi",correct : true},
         ]
     },

     {  
        question : "Who is the father of Arjuna ? ",
         answers : [
             {text:"Indra",correct : true},
             {text:"Vishnu",correct : false},
             {text:"Shiva",correct : false},
             {text:"Sun god",correct : false},
         ]
     },

     {  
        question : "Who died of a snake attack ? ",
         answers : [
             {text:"Arjuna",correct : false},
             {text:"Parikshit",correct : true},
             {text:"Sri Krishna",correct : false},
             {text:"Nakula",correct : false},
         ]
     },

     {  
        question : "Who was the father of Sri Krishna ? ",
         answers : [
             {text:"Vasudeva",correct : true},
             {text:"Bhima",correct : false},
             {text:"Pandu",correct : false},
             {text:"Shantanu",correct : false},
         ]
     },

     {  
        question : "Who was the mother of Shakunthala ? ",
         answers : [
             {text:"Kunti",correct : false},
             {text:"Menaka",correct : true},
             {text:"Gandhari",correct : false},
             {text:"Satyavati",correct : false},
         ]
     }

] ;

const questionElement = document.getElementById("ques") ;
const answerButton = document.getElementById("answer-buttons") ;
const  nextButton = document.getElementById("next-btn");


let currentQuesIndex = 0 ;
let score = 0 ;

function startQuiz(){

    currentQuesIndex = 0 ;
    score = 0 ;
    nextButton.innerHTML = "Next" 
    showQuestion();

}


function showQuestion()
{
    resetState() ;

    let currentQuestion = questions[currentQuesIndex] ;
    let questionNo = currentQuesIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button") ;
        button.innerHTML = answer.text ;
        button.classList.add("btn") ;
        answerButton.appendChild(button) ;
        if(answer.correct)
        {
            button.dataset.correct = answer.correct ;
        }
        button.addEventListener("click",selectAnswer) ;
    }) ;

}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButton.firstChild){

        answerButton.removeChild(answerButton.firstChild); 

    }
}


function selectAnswer(e)
{
    const selectedBtn  = e.target ;
    const isCorrect = selectedBtn.dataset.correct ==="true" ;
    if(isCorrect){
      selectedBtn.classList.add("correct")   ;
      score++ ;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct") ;
        }
        button.disabled = true ;
    }) ;

    nextButton.style.display = "block"
}

function handleNextButton(){

    currentQuesIndex++;
    if(currentQuesIndex<questions.length){
        showQuestion() ;
    }else{
        showScore() ;
    }
}


function showScore(){
    resetState() ;
    questionElement.innerHTML = 'You Scored ' + score + ' out of '+  questions.length ;
    nextButton.innerHTML = "Try Again" ;
    nextButton.style.display = "block";
}
nextButton.addEventListener("click",()=>{
    if(currentQuesIndex<questions.length)  {
        handleNextButton() ;
    }
    else{
        startQuiz(); 
    }
})

startQuiz();