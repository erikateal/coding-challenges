<!-- OBJECTIVE -->
<!-- Rock Paper Scissors! -->

<!-- LINK -->
<!-- https://www.codewars.com/kata/5672a98bdbdd995fad00000f -->

<!-- INSTRUCTIONS -->
<!-- Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 -- Output):

"scissors", "paper" -- "Player 1 won!"
"scissors", "rock" -- "Player 2 won!"
"paper", "paper" -- "Draw!" -->

<!-- MY SOLUTION -->
function rpc ($p1, $p2) {
    if($p1 === $p2){
      return "Draw!";
    } else if (($p1 == "scissors" && $p2 == "rock") || ($p1 == "paper" && $p2 == "scissors") || ($p1 == "rock" && $p2 == "paper")){
      return "Player 2 won!";
    } 
      return "Player 1 won!";
}


<!-- BEST PRACTICE -->
<!-- function rpc ($p1, $p2) {
    if ($p1 === $p2) {
        return 'Draw!';
    }
    if ($p1 === 'rock' && $p2 === 'scissors' ||
        $p1 === 'scissors' && $p2 === 'paper' ||
        $p1 === 'paper' && $p2 === 'rock') {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
} -->