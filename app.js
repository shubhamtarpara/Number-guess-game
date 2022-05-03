let btn = document.getElementById('btn');
let output = document.getElementById('output');
let attempt = document.getElementById('attempt')
let number;
var againButton = document.getElementById('againButton');

const generateRandomNumber = () => {
    number = [Math.floor(Math.random() * 100)];
    console.log(number)
}

generateRandomNumber();
let count = 0;



btn.addEventListener('click', function () {


    if (count > 6) {
        document.getElementById("btn");
        alert("You've reached maximum limits of attempts!!!");
        count = 0;
        generateRandomNumber();
    }
    let result = ("Attempts" + " " + ":" + " " + ++count)
    attempt.innerHTML = result
    console.log(count);
    let input = document.getElementById('input').value;

    if (input == number) {
        output.innerHTML = `You guessed right. The number is ${number}`;
    } else if (parseInt(input) < number) {
        output.innerHTML = "You guessed low!"
    };
    if (parseInt(input) > number) {
        output.innerHTML = "You guessed high!"
    }
})



againButton.addEventListener('click', function () {
    generateRandomNumber();
   let resetResult = ( count = 0)
    attempt.innerHTML =("Attempts" + " " + ":" + " " + resetResult)
    console.log(count);
    output.innerHTML = "Enter a number below"


})