async function gay() {
  var songs = [
    "gay",
    "Ram Ranch",
    "Fuck a Dog",
    "Up the Fucking Ass"
  ]
    var sound = new Audio(songs[Math.floor(Math.random()*songs.length)] + ".mp3");
    sound.play();
    for (let i = 1; i <= 50; i++) {
        document.getElementById("rainbow").style.opacity = i/100;
        await delay(20);
      }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }