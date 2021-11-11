// setup for cleaner code
let second = 0;
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// this code should regulate the counting of seconds

const stopwatch = {
    second: 0,
    start: function () {
        if (!this.interval) {
            const self = this;
            function count(val) {
                return val > 9 ? val : '0' + val;
            }
            this.interval = setInterval(function () {
                self.second += 1;
                seconds.innerHTML = count(++second % 60);
                minutes.innerHTML = count(parseInt(second / 60, 10));
            }, 1000);
        }
    },
    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },
    reset: function () {
        clearInterval(this.interval);
        second = 0;
        minutes.innerHTML = '00';
        seconds.innerHTML = '00';
        delete this.interval;
    }
};

// Event listeners for each button
start.addEventListener('click', function () { stopwatch.start(); });
pause.addEventListener('click', function () { stopwatch.pause(); });
reset.addEventListener('click', function () { stopwatch.reset(); });

//
var btn = document.getElementById("case-btn");
btn.addEventListener('click',
    function () {
        var time = document.getElementById("time");
        time.textContent = document.getElementById("minutes").textContent +" : "+ document.getElementById("seconds").textContent;
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
        var node = document.createElement("P");
        node.appendChild(document.createTextNode(name));

        node.classList.add("case");
        var btn = document.createElement("BUTTON");
        btn.innerHTML = "Record";
        btn.classList.add("small-btn");
        var span = document.createElement("SPAN");
        span.appendChild(btn);
        node.appendChild(span);
        let b = document.createElement("BUTTON");
        b.classList.add("small-btn");
        b.textContent = "Delete";
        b.addEventListener("click",
            function () {
                b.parentElement.remove();
            });
        node.appendChild(b);
        var span2 = document.createElement("SPAN");
        span2.textContent = "00:00";
        node.appendChild(span2);
        btn.addEventListener('click',
            function (e) {
                //var a = document.getElementById("case-container").lastElementChild;
                var a = e.target.parentElement;
                var time = a.parentElement.lastChild;
                time.textContent = document.getElementById("minutes").textContent + " : " + document.getElementById("seconds").textContent;
            });
        
        container.appendChild(node);
    }
}
