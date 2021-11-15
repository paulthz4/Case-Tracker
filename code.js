// setup for cleaner code
// timer code from https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak
const timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}



function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}
function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}


//add new case and record time and delete case events 
var btn = document.getElementById("case-btn");
btn.addEventListener('click',
    function () {
        var time = document.getElementById("time");
        time.textContent = document.getElementById("stopwatch").textContent;
    });

let btn2 = document.getElementById("delete");
btn2.addEventListener("click",
    function () {
        //console.log(btn2.parentElement);
        btn2.parentElement.remove();
    });

const cases = [];
function changeContent() {
    var name = document.getElementById("CaseName").value;
    if (name != "") {
        var container = document.getElementById("case-container");
        //make p tag that surrounds everything
        var node = document.createElement("P");
        // record button
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Record";
        btn.classList.add("small-btn");
        var span = document.createElement("SPAN");
        span.appendChild(btn);
        node.appendChild(span);
        node.appendChild(document.createTextNode(name));
        node.classList.add("case");
        
        //creates span tag that contains the time
        var span2 = document.createElement("SPAN");
        span2.textContent = "00:00:00";
        node.appendChild(span2);
        // creates the delete case button
        let b = document.createElement("BUTTON");
        b.classList.add("small-btn");
        b.classList.add("delete-btn");
        b.textContent = "Delete";
        b.addEventListener("click",
            function () {
                b.parentElement.remove();
            });
        node.appendChild(b);
        // event for recording time
        btn.addEventListener('click',
            function (e) {
                let a = e.target.parentElement;
                console.log(a.parentElement.children[1].innerHTML);
                let time = a.parentElement.children[1];
                let arr1 = time.textContent.split(":");
                let str = document.getElementById("stopwatch").textContent;
                let arr = str.split(":");
                console.log(arr);
                let arr2 = []
                for(var i = 0; i<3;i++){
                  arr2[i] = parseInt(arr1[i]) + parseInt(arr[i])
                }
                if(arr2[0] > 60){
                  arr2[1] += 1;
                  arr2[0] = 60 - (parseInt(arr1[0]) + parseInt(arr[0]));
                }
                if(arr2[1] > 60){
                arr2[1] += 1
                arr2[1] = 60 - parseInt(arr1[1]) + parseInt(arr[1]);
                
                }
                console.log(arr2[0] +", "+arr2[1]+", " +arr2[2]);
                time.textContent =  arr2[2] + ":" + arr2[1] + ":" + arr2[0];
                //time.textContent = document.getElementById("stopwatch").textContent;
            });
        
        container.appendChild(node);
    }
}
