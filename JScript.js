const deg = 6;
const hr = document.querySelector("#hour");
const mn = document.querySelector("#min");
const sc = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hour.style.transform = "rotateZ(" + (hh + mm / 12) + "deg)";
  min.style.transform = "rotateZ(" + mm + "deg)";
  sec.style.transform = "rotateZ(" + ss + "deg)";

  let hours = document.querySelector("#hours");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let zone = document.querySelector("#ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h + ":";
  minutes.innerHTML = m + ":";
  seconds.innerHTML = s + "&nbsp";
  zone.innerHTML = ampm;
}, 1000);
