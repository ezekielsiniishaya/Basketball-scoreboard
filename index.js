//adding variables from html
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let scoreHome = 0;
let scoreGuest = 0;
let homeScoreHistory = [0];
let guestScoreHistory = [0];
//buttons functions
scoreHome = 0;
scoreGuest = 0;

function addOneHome() {
  scoreHome += 1;
  homeScore.innerText = scoreHome;
  homeScoreHistory.push(scoreHome);
  console.log(homeScoreHistory);
}
function addTwoHome() {
  scoreHome += 2;
  homeScoreHistory.push(scoreHome);
  console.log(homeScoreHistory);
  homeScore.innerText = scoreHome;
}
function addThreeHome() {
  scoreHome += 3;
  homeScoreHistory.push(scoreHome);
  console.log(homeScoreHistory);
  homeScore.innerText = scoreHome;
}
function addOneGuest() {
  scoreGuest += 1;
  guestScoreHistory.push(scoreGuest);
  console.log(guestScoreHistory);
  guestScore.innerText = scoreGuest;
}
function addTwoGuest() {
  scoreGuest += 2;
  guestScoreHistory.push(scoreGuest);
  console.log(guestScoreHistory);
  guestScore.innerText = scoreGuest;
}
function addThreeGuest() {
  scoreGuest += 3;
  guestScoreHistory.push(scoreGuest);
  console.log(guestScoreHistory);
  guestScore.innerText = scoreGuest;
}
function revertHomeScore() {
  if (homeScoreHistory.length > 1) {
    homeScoreHistory.pop();
    scoreHome = homeScoreHistory[homeScoreHistory.length - 1];
    homeScore.innerText = scoreHome;
    console.log(homeScoreHistory);
    console.log(scoreHome);
  } else {
    scoreHome = 0;
    homeScoreHistory = [];
    homeScore.innerText = "00";
    console.log(homeScoreHistory);
  }
}
function revertGuestScore() {
  if (guestScoreHistory.length > 1) {
    guestScoreHistory.pop();
    scoreGuest = guestScoreHistory[guestScoreHistory.length - 1];
    guestScore.innerText = scoreGuest;
    console.log(guestScoreHistory);
    console.log(scoreGuest);
  } else {
    scoreGuest = 0;
    guestScoreHistory = [];
    guestScore.innerText = "00";
    console.log(guestScoreHistory);
  }
}
function ClearAll() {
  scoreHome = 0;
  scoreGuest = 0;
  homeScore.innerText = "00";
  guestScore.innerText = "00";
  homeScoreHistory = [];
  guestScoreHistory = [];
  console.log(homeScoreHistory);
  console.log(guestScoreHistory);
}
