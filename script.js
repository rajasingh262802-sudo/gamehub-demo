const games = [
  ["GOAL 2","⚽","linear-gradient(135deg,#182c63,#0c78a5)"],
  ["MATKA MARKET DEMO","🪙","linear-gradient(135deg,#5b3c12,#c49b3a)"],
  ["DOLLY DANA","🎯","linear-gradient(135deg,#6e2018,#171717)"],
  ["MOGAMBO","🎲","linear-gradient(135deg,#173f38,#8d2c13)"],
  ["LUCKY 6","🍀","linear-gradient(135deg,#0b642f,#9bbd20)"],
  ["BEACH ROULETTE DEMO","🌊","linear-gradient(135deg,#14658a,#e0a23b)"],
  ["ROULETTE DEMO","🎡","linear-gradient(135deg,#111,#7b1b1b)"],
  ["VIP ROULETTE DEMO","♛","linear-gradient(135deg,#171717,#7a5b18)"],
  ["POISON CARD DEMO","🃏","linear-gradient(135deg,#270009,#8d102e)"],
  ["UNIQUE CARD GAME","🃏","linear-gradient(135deg,#111,#5d1744)"],
  ["JOKER CHALLENGE","🃏","linear-gradient(135deg,#082f14,#6e8e19)"],
  ["MEMORY CARDS","♠ ♥ ♦ ♣","linear-gradient(135deg,#132f52,#111)"],
  ["QUEEN TOP OPEN","👑","linear-gradient(135deg,#3b2411,#d48c1d)"],
  ["JACK TOP OPEN","🂡","linear-gradient(135deg,#111,#654b20)"],
  ["SIC BO DEMO","🎲","linear-gradient(135deg,#222,#58616d)"],
  ["INSTANT CHALLENGE","🎯","linear-gradient(135deg,#6f1111,#d99716)"],
  ["BALL BY BALL","🏟️","linear-gradient(135deg,#08721e,#7d9f23)"],
  ["TEEN CARD DEMO","🃏","linear-gradient(135deg,#344,#777)"],
  ["POKER CHALLENGE","🂡","linear-gradient(135deg,#15561f,#092d11)"],
  ["BACCARAT DEMO","♛","linear-gradient(135deg,#7b6311,#111)"],
  ["DRAGON TIGER","🐉 🐅","linear-gradient(135deg,#087d45,#0d4530)"],
  ["LUCKY NUMBER","7️⃣","linear-gradient(135deg,#174d20,#a88b17)"],
  ["3 CARDS JUDGEMENT","🃏","linear-gradient(135deg,#17144b,#4137a0)"],
  ["QUIZ ARENA","❓","linear-gradient(135deg,#163d7a,#6c1f84)"],
  ["CRICKET QUIZ","🏏","linear-gradient(135deg,#064b32,#1f9a67)"],
  ["FOOTBALL SKILLS","⚽","linear-gradient(135deg,#143e6d,#1c9c57)"],
  ["TENNIS REFLEX","🎾","linear-gradient(135deg,#1d6c2b,#a1a619)"],
  ["RACING CHALLENGE","🏎️","linear-gradient(135deg,#68120f,#242424)"],
  ["MEMORY MATCH","🧠","linear-gradient(135deg,#27145d,#146c8e)"],
  ["ARCADE BLAST","👾","linear-gradient(135deg,#1b1055,#e32673)"]
];

const grid = document.getElementById("gameGrid");
games.forEach(([name, icon, bg]) => {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `<div class="thumb" style="background:${bg}">${icon}<br><span>${name}</span></div><div class="label">${name}</div>`;
  card.onclick = () => playGame(name);
  grid.appendChild(card);
});

function playGame(name){
  alert(`${name}\n\nDemo game selected. This site uses virtual points only.`);
}
function showSupport(){
  alert("GameHub Demo Support\n\nFor this demo website, no real-money transactions are enabled.");
}
