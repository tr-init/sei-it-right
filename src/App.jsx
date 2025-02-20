import React, { useState } from 'react'
import Card from './Card.jsx'
import Simea from './assets/SimeaImgs/N.png' //HER EYES ARE SEE THRU
import SimeaG from './assets/SimeaImgs/G.png'
import SimeaL from './assets/SimeaImgs/L.png'
import Sose from './assets/SoseImgs/N.png'
import SoseG from './assets/SoseImgs/G.png'
import SoseL from './assets/SoseImgs/L.png'
import Ioane from './assets/IoaneImgs/N.png'
import IoaneG from './assets/IoaneImgs/G.png'
import IoaneL from './assets/IoaneImgs/L.png'
import Keola from './assets/KeolaImgs/N.png'
import KeolaG from './assets/KeolaImgs/G.png'
import KeolaL from './assets/KeolaImgs/L.png'
import bar from './assets/bar.png'
import hib from './assets/Hibiscus.png'



import DateStat from './DateStat.jsx'

function App() {
  const [i, setI] = useState(0);
  const [temperature, setTemperature] = useState(5);
  const [dates, setDates] =  useState([{name: "Ioane", age: 22, gender: "Male", village :"Vaitele"}, 
                              {name : "Keola", age : 28, gender : "Male", village : "Afega"},
                              {name : "Simea", age : 23, gender : "Female", village : "Lotopa"},
                              {name: "Sosefina", age : 26, gender : "Female", village : "Lefaga"}
  ]);
  const [dateName, setDateN] = useState("Keola");
  const [dateAge, setDateA] = useState(28);
  const [dateGender, setDateG] = useState("Male");
  const [dateVillage, setDateV] = useState("Afega");
  const [datePics, setDatePics] = useState([{name: "Ioane", G: IoaneG, N: Ioane, L:IoaneL}, 
    {name: "Keola", G: KeolaG, N: Keola, L:KeolaL},
    {name: "Simea", G: SimeaG, N: Simea, L:SimeaL},
    {name: "Sosefina", G: SoseG, N: Sose, L:SoseL}]);
  const [datePic, setDatePic] = useState({name: "Sosefina", G: {SoseG}, N: {Sose}, L:{SoseL}})
  const [dialogue, setDialogue] = useState([{question: "Manuia fo'i fa'afetai! O fea le nu'u e te sau ai?", answers:{choice1: "O te sau mai o Aukilani", choice2: "o lo’u nu’u o lou nu’u", choice3:"O lo'u nu'u o Tefasa"}, correct: 1},
                                  {question: "O le a le mea e te fiafia e fai?", answers:{choice1: "Ou te le fiafia e faatau",choice2: "Ou te fiafia e 'ai lakapi", choice3:"Ou te fiafia e ta'alo tenisi"}, correct:3},
                                  {question: "O e fia 'ai? O le a sau mea'ai?", answers:{choice1: "Ioe, ou te 'ai le i'a",choice2: "Leai, ou te manao i le i'a", choice3:"Ioe, Fia ai"}, correct:1},
                                  {question: "Fai mai se fesili. O le a se mea e te fia iloa?", answers:{choice1: "O a mea'ai e te fiafia i ai?",choice2: "O ai lau mea'ai e te fiafia iai?", choice3:"O a mea'ai?"}, correct:1},
                                  {question: "Ou te fiafia i mea'ai Italia. Ae a oe?", answers:{choice1: "Ou te fiafia i vae Amerika",choice2: "Ou te fiafia i mea'ai Iapani.", choice3:"Ou te fiafia i mea inu Amerika"}, correct:2},
                                  {question: "E lelei. Ou te fesili mo le pizza", answers:{choice1: "E mafai ona ou maua?",choice2: "E le mafai ea ona e le migao tele?", choice3:"Ou te aumai ni vai"}, correct:3},
    ]);
  const [question, setQuestion] = useState("Malo soifua! O a mai oe?");
  const [choice1, setChoice1] = useState("Manuia le taeao. 'O ā mai 'oe?");
  const [choice2, setChoice2] = useState("Manuia lou aso fanau. 'O ā mai 'oe?");
  const [choice3, setChoice3] = useState("Manuia fa'afetai. 'O ā mai 'oe?");
  const [correct, setCorrect] = useState(3);






  function handleDatePick(dateNum){
    setDateN(dates[dateNum].name);
    setDateA(dates[dateNum].age);
    setDateG(dates[dateNum].gender);
    setDateV(dates[dateNum].village);
    setDatePic(datePics[dateNum]);
    const s = document.getElementById("startingPage");
    s.style.display = "none";
    const g = document.getElementById("datePage");
    g.style.display = "block";
    document.getElementById('bar').style.top ="40%";
  }


  function handleNewDialogue(){
    setQuestion(dialogue[i].question);
    setChoice1(dialogue[i].answers.choice1);
    setChoice2(dialogue[i].answers.choice2);
    setChoice3(dialogue[i].answers.choice3);
    setCorrect(dialogue[i].correct);
    if (i < 5){
      setI(n => n+1);
    }
    else{
      const f = document.getElementById("finishDate");
      f.style.display = "block";
    }
    
  }
  
  function handleChoice(choiceNum){
    if (correct == choiceNum){
      setTemperature(n => n+1);
    }
    else{
      setTemperature(n => n-1);
    }
    
    const bar = document.getElementById('bar');
    if (temperature < 5){
      bar.style.top = "60%"
      document.getElementById("datePerson").src = datePic.L;
    }
    else if(temperature > 5){
      bar.style.top = "25%"
      document.getElementById("datePerson").src = datePic.G;
    }
    else{
      bar.style.top = "40%"
      document.getElementById("datePerson").src = datePic.N;
    }
    handleNewDialogue();

  }

  function handleFinish(bool){
    const f = document.getElementById("finishDate");
      f.style.display = "none";
      const fg = document.getElementById("datePage");
      fg.style.display = "none";
    if(bool == true && temperature >= 5){
      const ss = document.getElementById("success");
      ss.style.display = "block";
    }
    else{
      const ff = document.getElementById("failure");
      ff.style.display = "block";
    }

  }


  function handleRestart(){
    document.getElementById("failure").style.display = "none";
    document.getElementById("startingPage").style.display = "block";
    setTemperature(n=> 5);
    setI(n => 0);
    
  }





  return (<>
    
    <h1 className = "header">SEI IT RIGHT</h1>
    <img src = {hib} id = "hib"/>
    <section id='startingPage'>
    <h2 className = "instructions">Afio mai! Pick a date:</h2>
      <Card photo = {Ioane} name = "Ioane" age = {22} gender = "Male" village = "Vaitele" className = "card"/>
      <Card photo = {Keola}name = "Keola" age = {28} gender = "Male" village = "Afega" className = "card"/>
      <Card photo = {Simea}name = "Simea" age = {23} gender = "Female" village = "Lotopa" className = "card"/>
      <Card photo = {Sose}name = "Sosefina" age = {26} gender = "Female" village = "Lefaga" className = "card"/>
      <div id = "buttondiv">
      <button onClick={() => handleDatePick(0)} id = "IoaneBut"className="button">START DATE!</button>
      <button onClick={() => handleDatePick(1)} id = "KeolaBut"className="button">START DATE!</button>
      <button onClick={() => handleDatePick(2)} id = "SimeaBut" className="button">START DATE!</button>
      <button onClick={() => handleDatePick(3)} id = "SoseBut" className="button">START DATE!</button>
      </div>
      
    </section>


    <section id = "datePage">
      
      <div id = 'chatBubble'>
      <p id = "question">{question}</p>
      
      <div id = "options">
      <button className='buttonAns' id = "choice1" onClick= {() => handleChoice(1)}>{choice1}</button>
      <button className='buttonAns' id = "choice2" onClick= {() => handleChoice(2)}>{choice2}</button>
      <button className='buttonAns' id = "choice3" onClick= {() => handleChoice(3)}>{choice3}</button>
      </div></div>
      <img src = {bar} id = 'bar'></img>
      
      <DateStat/>

      <img src = {datePic.N} id = 'datePerson'/>
    </section>

    <section id = "finishDate">
      <div id = 'finishBubble'>
      <p id = "question">Did you enjoy spending time with your date?</p>
        <div id = "finishYN">
        <button className='buttonAns' id = "likeDate" onClick= {() => handleFinish(true)}>YES</button>
        <button className='buttonAns' id = "dislikeDate" onClick= {() => handleFinish(false)}>NO</button>
        </div>
      </div>
    </section>

    <section id = "success" className = 'decision'>
      <div>
      <p>Congrats! It's a match!</p>
      <p>{dateName} enjoyed the date as much as you did!</p>
      </div>
      <img src = {datePic.G} id = 'dateG' className='datePic'/>
    </section>
    <section id = "failure" className='decision'>
      <div>
      <p>Sorry! It's not a match!</p>
      <p>Sparks weren't flying between you and {dateName}</p>
      <br></br>
      <br></br>
      <button className= "button" id = "restartBut" onClick={() => handleRestart()}>Play again?</button>
      </div>
      <img src = {datePic.L} id = 'dateL' className='datePic'/>
    </section>
    
    </>
  )
}

export default App;
