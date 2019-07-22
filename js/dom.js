"use strict";

// let myButtons = document.getElementsByTagName("button"); 
// console.log(myButtons);

// myButtons[1].innerHTML = "Test";
// myButtons[1].style.backgroundColor = "#000";
// myButtons[2].classList.toggle("aaaa");
// console.log(myButtons[2].className);


// let myInputs = document.getElementsByClassName("my-input");
// let input1 = myInputs[0];
// input1.type = "text";
// input1.setAttribute("id", "input-name");
// console.log(input1.getAttribute("id"));
// input1.setAttribute("placeholder", "Enter Your Name");


let sattar = document.createElement("ul");
sattar.classList.add("list-group");

let liElement = document.createElement("li");
liElement.className = "list-group-item";

let pElement = document.createElement("p");
pElement.innerText = "Lorem ipsum";
pElement.className = "text-success";
pElement.onclick = function(){
    this.classList.toggle("bg-primary"); 

};

liElement.appendChild(pElement);

sattar.appendChild(liElement);
document.getElementById("student-list-container").appendChild(sattar);


console.log(document.querySelectorAll(".btn:last-child") );
console.log(document.querySelector("#student-list-container") );

let imgElement = document.createElement("img");
imgElement.src = "https://cdn.pixabay.com/photo/2019/06/22/08/10/state-of-the-union-4291098_1280.jpg";
imgElement.className = "card-img-top";

document.querySelector(".card.my-card").appendChild(imgElement);


let cardBody = document.querySelector(".card.my-card .card-body")
cardBody.style.backgroundColor = "turquoise";
cardBody.style.fontSize = "20px";

cardBody.style = {color:"red"};
