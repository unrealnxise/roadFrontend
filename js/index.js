/*
    console.log - текст у консоль
    windows.alert - текст для користувача у вигляді вікна
    document.getElementById( id ) - отримання елемента за його ID
    .textContent - зміна тексту елемента

    let - змінна
    ${ variable } - вставка змінної у текст
    typeof - дізнатися тип змінної

    ------- User input -------
    window.prompt - easy way
    .value - отрмання даних з елементу

    Math.floor(Math.random() * 6) + 1 - рандомне ціле число
*/

// ---------------- Counter --------------------

// const decBtn = document.getElementById("decreaseBtn");
// const resBtn = document.getElementById("resetBtn");
// const incBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");

// let count = 0;

// incBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count
// }

// decBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count
// }

// resBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count
// }


// ---------------- Random generator --------------------


// document.getElementById("generateNum").onclick = function(){
//     let minNum = parseInt(document.getElementById("minNum").value);
//     let maxNum = parseInt(document.getElementById("maxNum").value);
//     let randomNum = Math.floor(Math.random() * maxNum) + minNum;
//     document.getElementById("randomNum").textContent = randomNum;
// }


// ---------------- ternary operator - shortcut to if --------------------

// let age = 21;
// let message = age >= 18 ? "u gay" : "u not gay";
// console.log(message);


// ---------------- ToDo list --------------------

// const add = document.getElementById("add");

// let list = [];

// add.onclick = function(){

//     const newtodo = document.createElement("input");
//     newtodo.type = "checkbox";
//     newtodo.checked = false;

//     const newtodotext = document.createElement("label");
//     newtodotext.className = "labels";
//     newtodotext.textContent = document.getElementById("newTodo").value;
//     newtodotext.append(newtodo);
//     document.getElementById("containerCheckbox").appendChild(newtodotext);
// }

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`);
    }
    diceImages.innerHTML = images.join('');
}