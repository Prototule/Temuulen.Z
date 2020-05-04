// КОДны талаар бяцхаан танилцуулга
var IsNewGame
var shooDom = document.querySelector(".dice");
newGame();

//  Тоглогчийн ээлжийг хадгалах хувьсагч Тоглогч 1----0 Тоглогч 2 ------1
var activePlayer;

// Тоглогчийн оноог хадгалах хувьсагч

var scores;

var roundScore;
// тоог рандомоор унгаах нэг хувьсагч хэрэгтэй , 1-6 гийн хооронд


function newGame(){
    IsNewGame = true; 
    //  Тоглогчийн ээлжийг хадгалах хувьсагч Тоглогч 1----0 Тоглогч 2 ------1
 activePlayer = 0;

// Тоглогчийн оноог хадгалах хувьсагч

 scores =[0 ,0];

 roundScore = 0
// тоог рандомоор унгаах нэг хувьсагч хэрэгтэй , 1-6 гийн хооронд

// Тоглоомыг бүр эхнээс нь эхлүүлэх, бүх зүйлсийн 0 болгох
document.getElementById("score-0").textContent= 0;

document.getElementById("score-1").textContent= 0;

document.getElementById("current-0").textContent= 0;

document.getElementById("current-1").textContent= 0;

// Үүний дараа шоог түр алга болгоно (Тоглоом дөнгөж шинээр эхлэж байгаа тул)
shooDom.style.display ="none";

// Шинээр эхлүүлэхдээ тоглогчийн нэрийг Тоглогч 1 Тоглогч 2 болгоно
document.getElementById("name-0").textContent = "Тоглогч 1";

document.getElementById("name-1").textContent = "Тоглогч 2";

document.querySelector('.player-0-panel').classList.remove("winner");

document.querySelector('.player-1-panel').classList.remove("winner");

document.querySelector('.player-0-panel').classList.remove("active");

document.querySelector('.player-1-panel').classList.remove("active");

document.querySelector('.player-0-panel').classList.add("active");
}
// Шоо нь 1-6 хүртэл рандомоор аль нэгэн нь сонгогдоно
shooToo = Math.floor((Math.random()*6))+1;


shooDom.style.display ="none";

// Шоогоо шидэх товч дээр дарах үед доорх код ажиллана

document.querySelector(".btn-roll").addEventListener("click", function(){
if(IsNewGame){if(IsNewGame === true){


    var shooToo = Math.floor((Math.random()*6))+1;

    shooDom.style.display = "block";

    shooDom.src = "dice-"+shooToo+ ".png";

    if (shooToo !== 1) {
        // Буусаан тоон дээрэээ одоогийн тоог нэмэж тавьна

        roundScore = roundScore + shooToo;

        document.getElementById("current-" + activePlayer).textContent = roundScore;

        // document.getElementById("score-" + activePlayer).textContent = shooToo;
    } else {
        // Хэрэв шоо 1 буувал 0 болно
        nextPlayer();
    }
    }}
else( alert("Тоглоом дууслаа шинээр эхлэх товч дээр дарна уу"))
}
)
// Шоогоо hold darj onoodoo oruulahd
document.querySelector('.btn-hold').addEventListener("click", function() {
  if(IsNewGame){    // Toglogchiin tsugluulsan onoog  global onoo deer oruulna
    scores[activePlayer] = scores[activePlayer]+roundScore;

        // hold darsan uchir eeljinde tsugluulsan onoog 0 bolgono

        // onoogo solino
        document.getElementById("score-"+ activePlayer).textContent =scores[activePlayer]  ;
        if(scores[activePlayer] >=100){
            IsNewGame = false;
            // Winner string will appear instead of name.
            document.getElementById("name-" + activePlayer).textContent = "WINNER"
            document.querySelector(".player-" + activePlayer + "-panel") .classList.add("winner");
        }else {
            // daraagiin hun ruuge shiljne
        nextPlayer();
        }}
    else{
    alert("Тоглоом дууслаа шинээр эхлэх товч дээр дарна уу")
    }
} )



function nextPlayer(){
     // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгоно.
  shooDom.style.display = "block";
}

document.querySelector(".btn-new").addEventListener("click", newGame)

document.querySelector(".btn-instruction").addEventListener("click", function(){
    window.location.href = 'https://prototule.github.io/Zaawar/'
}  )