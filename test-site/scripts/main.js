/*
*
*/
// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// document.querySelector("html").addEventListener("click", function () {
//     alert("Don't touch me, it's pain");
// });

let youImage = document.querySelector("img");
youImage.onclick = function () {
    let mySrc = youImage.getAttribute("src");
    if (mySrc == "images/content.png") {
        youImage.setAttribute("src", "images/logo.png");
    } else {
        youImage.setAttribute("src", "images/content.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }
  


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
    setUserName();
  };
