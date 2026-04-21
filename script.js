// /need a secret Number
// ask the user for a guess
// compare with my secret num
// reapat cond until its correct/ psudo code

let secret = Math.floor(Math.random() * 20) + 1;

let guess = Number(prompt("Guess a number between 1 and 20"));

while (guess != secret) {

    if (!guess && guess !== 0) {
        alert("⚠️ You didn't enter anything!!!!");
    } else if (isNaN(guess)) {
        alert("Please enter a valid number!🤝");
    } else if (guess > secret) {
        alert("Too HIGH Try again 🤣");
    } else if (guess < secret) {
        alert("Too Low! Try again 🤣");
    }

    guess = Number(prompt("Try Again😭"));
}

alert("CORRECT!!!🥳🥳🥳");