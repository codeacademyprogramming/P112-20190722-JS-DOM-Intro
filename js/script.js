"use strict";

let students = [];
let inputs = document.getElementsByClassName("form-control");


function Student(ad, soyad, email, telefon, yas){
    this.Name = ad;
    this.Surname = soyad;
    this.Email = email;
    this.Phone = telefon;
    this.Age = yas;
    this.info = function(){
        return this.Name + " " + this.Surname + " " + this.Email + " " + this.Phone + " - " + this.Age;
    };
}



function addStudent(){
    // if(inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "" && inputs[3].value != "" && inputs[4].value != ""){
       let s = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value);
       students.push(s);
       reset();
       showStudents();
    // } else {
    //     alert("Fill all inputs");
    // }
    
}

function reset(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
}

function showStudents(){
    let rows = "";

    for(let i = 0; i < students.length; i++){
        rows += `<tr>
            <th scope="row">${i+1}</th>
            <td>${students[i].Name}</td>
            <td>${students[i].Surname}</td>
            <td>${students[i].Email}</td>
            <td>${students[i].Phone}</td>
            <td>${students[i].Age}</td>
        </tr>`
    }

    document.getElementById("table-body").innerHTML = rows;
}


function sort(property){
    students.sort(function(a, b){
        let avalue = a[property].toLowerCase();
        let bvalue = b[property].toLowerCase();

        if(avalue > bvalue){
            return 1;
        } else if(avalue < bvalue){
            return -1;
        } else {
            return 0;
        }
    });

    showStudents();
}

function sortByAge(){
    students.sort(function(a, b){
        return a.Age - b.Age;
    });

    showStudents();
}

function randomize(){
    students.sort(function(a, b){
        return (0.5 - Math.random());
    });

    showStudents();
}