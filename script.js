// /need a secret Number
// ask the user for a guess
// compare with my secret num
// reapat cond until its correct/ psudo code

let secret = Math.floor(Math.random() * 20) + 1;
// guess
let guess = prompt("Guess a number between 1 and 20");
// compare
// guess == secret
while (guess != secret) {
    if (guess > secret) {
        alert("Too HIGH Try again 🤣");
    } else if {
        alert("Too Low! Try again 🤣");
    }
      else { 
         alert("Invalid operation");
       }
    guess = prompt("Try Again😭");
}
alert("CORRECT!!!🥳🥳🥳");
// while (i > guess) {
//     prompt("Guess a number between 1 and 20")
// }
