// document.getElementById("start").addEventListener("click", stage1Oprtn);
// let problemsEle=document.getElementsByClassName("problems")[0];
// let calculateEle=document.getElementById("calculate");

// function stage1Oprtn() {
//     let operationEle = document.getElementById("operation"),
//         rangeEle = document.getElementById("range"), randomNumber1, randomNumber2,
//         operation=operationEle.value,
//         range = parseInt(rangeEle.value);

//         resetproblemsEle();
//         for (i = 1; i <= 16; i++) {
//             randomNumber1 = generateRandomNumber(range);
//             randomNumber2 = generateRandomNumber(range);

//             updateProblem(randomNumber1, randomNumber2,operation);
//         }
//         enableCalculate();
//     }
// function generateRandomNumber(max) {
//     return parseInt(Math.random() * max);
// }
// function enableCalculate(){
//     calculateEle.removeAttribute('disabled');
// }
// function texttosymbol(text) {
//     switch (text) {
//         case "add":
//             return '+'
//             break;
//         case "sub":
//             return '-'
//             break;
//         case "multiplication":
//             return '*'
//             break;
//         case "division":
//             return '/'
//             break;
//         default:
//             return '/'
//             break;
//     }
// }
// function resetproblemsEle(){
//     problemsEle.innerHTML="";
// }
// function updateProblem(number1, number2, operation) {
//     // create Problem div
//     let problemEle = document.createElement('div');
//     problemEle.setAttribute("class", "problem");

//     // Create h3 for number1
//     let number1Ele = document.createElement('h3');

//     // update value foe number1
//     number1Ele.innerText = number1;
//     console.log(number1Ele);

//     // Create h3 for number2 
//     let number2Ele = document.createElement('h3');

//     // update value for number2
//     number2Ele.innerText = number2;
//     console.log(number2Ele);

//     // Create h3 for operation
//     let oprtnEle = document.createElement("h3");

//     // update symbol for Operation
//     oprtnEle.innerText = texttosymbol(operation);
//     console.log(oprtnEle);

//     // create hr
//     let hrEle = document.createElement('hr');

// // create input box 
// let inptEle = document.createElement('input');

// //Update input class name
// inptEle.setAttribute("class", 'answer');

// // create input type text
// inptEle.setAttribute("type", 'text');

//     // append(add)hr,h3's,input inside problem

// problemEle.append(number1Ele);
// problemEle.append(oprtnEle);
// problemEle.append(number2Ele);
// problemEle.append(inptEle);

//     // Append Inside Problems 
//     problemsEle.append(problemEle)
// }

document.getElementById("start").addEventListener("click", first);
problemsEle = document.getElementsByClassName("problems")[0];
function first() {
    let operationEle = document.getElementById("operation"),
        rangeEle = document.getElementById("range"),
        operation = operationEle.value,
        range = parseInt(rangeEle.value), range1, range2;
    // console.log(operation,range);
    for (i = 0; i <= 16; i++) {
        range1 = generateRandomNumber(range);
        range2 = generateRandomNumber(range);
        console.log(range1, range2);
    }
    update(range1, range2, operation);
}
function texttosymbol(text) {
    switch (text) {
        case "add":
            return '+'
            break;
        case "sub":
            return '-'
            break;
        case "multiplication":
            return '*'
            break;
        case "division":
            return '/'
            break;
        default:
            return '/'
            break;
    }
}


function generateRandomNumber(max) {
    return parseInt(Math.random() * max);
}
function update(number1, number2, operation) {
    let problemEle = document.createElement("div");
    problemEle.setAttribute("class", "problem");

    let number1Ele = document.createElement("h3");
    number1Ele.innerText = number1;

    let number2Ele = document.createElement("h3");
    number2Ele.innerText = number2;

    let operation = document.createElement("h3");
    operation.innerText = texttosymbol(operation);

    let inptEle = document.createElement('input');

    inptEle.setAttribute("class", 'answer');

    inptEle.setAttribute("type", 'text');

    problemEle.append(number1Ele);
    problemEle.append(oprtnEle);
    problemEle.append(number2Ele);
    problemEle.append(inptEle);

    problemsEle.append(problemEle)



}