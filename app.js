const yourDate = new Date("2018-11-14T00:00:00"),
music = ['noinaycoanh', 'nguoiamphu'];

document.addEventListener('DOMContentLoaded', function(){
      var rootTime = document.querySelector("time");

      var rootDate = document.querySelector("date");

      var rootYear = document.querySelector("year");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      // document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+"\n DAYS";

      function olock() {
            var today = new Date(),
            day = Math.floor( Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24));
            if (day < 1096)
                  year = 2;
            else
                  year = 3;
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootYear.textContent = year + " ",
            // rootDate.textContent = day +" DAY ",
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);