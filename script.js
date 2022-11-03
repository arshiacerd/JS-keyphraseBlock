var arr = [
  { Name: "CrawligWeb", Time: 5, Divisions: 5 },

  { Name: "Scraping Content", Time: 10, Divisions: 5 },
  { Name: "Semantic Modeling", Time: 5, Divisions: 4 },
  { Name: "NLP", Time: 8, Divisions: 5 },
  { Name: "Competitive Analysis", Time: 5, Divisions: 4 },
];
const myarr = [];
const intervalArr = [];
var calArr;

arr.forEach((data, index) => {
  var durSec = data.Time / data.Divisions;
  durMS = durSec * 1000;
  intervalArr.push(durMS);
  var per = (durSec / data.Time) * 100;
  calArr = per;

  myarr.push(calArr);
});
console.log("intervalArr", myarr);
// var calculations = 5/5; =>1 =>1000ms  => 20%
// interval duration = 1000ms
const perValue = ["20%", "44%", "73%", "100%"];
const input = document.querySelector("input");
input.addEventListener("keyup", function (event) {
  var nameInput = document.getElementById("name").value;

  console.log(nameInput);
  if (nameInput) {
    document.getElementById("btn").disabled = false;
    document.getElementById("btn").style.opacity = "1";
  } else {
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").style.opacity = "0.3";
  }
});
const ul = document.createElement("ul");
const appendedUL = document.getElementById("verticalBar").appendChild(ul);
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  appendedUL.style.display = "flex";
  document.getElementById("btn").innerHTML =
    '<i class="fa fa-circle-o-notch fa-spin"></i>';
  document.getElementById("name").value = " ";
  logical();

  // let progress = setInterval (()=>{
  //   progressValue ++;
  //   circle.style.border =`2px solid brown`
  // })
});
var childIndex = 0;

arr.forEach((data, index) => {
  const circleDiv = document.createElement("div");
  circleDiv.id = "circle";
  const spanPer = document.createElement("span");
  const spanText = document.createElement("span");
  spanPer.className = "spanPer";

  spanPer.textContent = "0%";

  spanText.textContent = "...";
  spanPer.id = "per";
  const li = document.createElement("li");
  li.id = "li1";
  li.innerHTML = data.Name;

  li.appendChild(spanText);

  li.appendChild(spanPer);
  li.appendChild(circleDiv);
  console.log(spanPer.textContent);

  appendedUL.appendChild(li);
});

var j = 0;
var count = 0;

function logical() {
  secondFun(0);
  var second = setTimeout(() => {
    secondFun(1);
    clearInterval(second);
  }, 4100);
  var third = setTimeout(() => {
    secondFun(2);
    clearInterval(third);
  }, 12820);
  var four = setTimeout(() => {
    secondFun(3);
    clearInterval(four);
  }, 16920);
  var five = setTimeout(() => {
    secondFun(4);
    clearInterval(five);
  }, 24190);
}

function secondFun(j) {
  const myLi = document.querySelector("ul").childNodes[j];

  var check = 0;
  var i = 0;

  const myInterval = setInterval(function () {
    check = check + myarr[j];
    if (check > 100) {
      check = 100;
    }

    myLi.children[1].innerHTML = `${check}%`;
    if (myLi.children[1].innerHTML === "100%") {
      var circle = (myLi.children[2].style.background = "dodgerblue");
      console.log(circle);
    }
    if (j == 4 && myLi.children[1].innerHTML === "100%") {
      document.getElementById("btn").innerHTML =
        '<i class="fa fa-circle-o-notch "></i>';
    }
    i = i + 1;

    if (i == 5) {
      count = 5;

      clearInterval(myInterval);
    }
  }, intervalArr[j]);
}

const myul = document.querySelector("ul");
