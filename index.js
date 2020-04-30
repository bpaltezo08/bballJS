<h1><span id="t1n">Team 1 </span>: <span id="t1s">0</span></h1>
<h1><span id="t2n">Team 2</span> : <span id="t2s">0</span></h1>
<br>
<hr>
<br>


<h2 id="gameclock">00:00</h2>
<h4 id="shotclock">00:00</h4>
<button onclick="Pause()">Pause</button>
<button onclick="Resume()">Resume</button>
<button onclick="Next()">Next</button>


<script>

  console.log("Start Game Clock, init(minutes)")
  console.log("Add Score, score(1 or 2, points)")
  console.log("Set Team Name, insertTeamName(1 or 2, name)")

  var minutes, m, s, sc, timer, GCInterval, SCInterval
  var team1 = {
    score: 0,
    name: "Team 1",
  }
  var team2 = {
    score: 0,
    name: "Team 1"
  }

  function gameClock() {
    let html = document.getElementById("gameclock")
    GCInterval = setInterval(function () {
      html.innerHTML = (m >= 10 ? m : "0" + m) + ":" + (s == 60 ? "00" : (s >= 10 ? s : "0" + s))
      if (timer == 0) {
        clearInterval(GCInterval)
      } else {
        s--
        if (s == 0) s = 60
        if (m > 0 && s == 59) m -= 1
        timer -= 1
      }
    }, 1000)
  }
  function shotClock() {
    let interval
    let html = document.getElementById("shotclock")
    SCInterval = setInterval(function () {
      if (sc == 0) {
        html.innerHTML = "00"
        sc = 24
        Pause()
      } else {
        html.innerHTML = sc >= 10 ? sc : "0" + sc
        sc -= 1
      }
    }, 1000)
  }
  function Pause() {
    console.log("Paused!")
    clearInterval(SCInterval)
    clearInterval(GCInterval)
  }
  function Resume() {
    console.log("Resumed!")
    gameClock()
    shotClock()
  }
  function Next() {
    sc = 24
    Pause()
    Resume()
  }

  function score(ti, score) {
    ti == 1 ? team1.score += score : team2.score += score
    document.getElementById("t1s").innerHTML = team1.score
    document.getElementById("t2s").innerHTML = team2.score
  }
  function insertTeamName(ti, name) {
    ti == 1 ? team1.name = name : team2.name = name
    document.getElementById("t1n").innerHTML = team1.name
    document.getElementById("t2n").innerHTML = team2.name
  }

  function init(mins) {
    s = 60
    m = mins
    timer = mins * 60
    sc = 24 //SHOT CLOCK
    gameClock()
    shotClock()
  }

</script>
