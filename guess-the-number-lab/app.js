const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    prevGuesses: [],
    secretNum: null,

    play: function() {
        this.secretNum = Math.floor(Math.random() *
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

        let guess = NaN;
        while (this.secretNum != guess) {
            guess = this.getGuess();
            this.prevGuesses.push(guess);
            this.render(guess);
            if (guess === this.secretNum) return;
        }
    },

    getGuess: function() {
        let guess = NaN;
        while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
          guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
        }
        return guess;
      },

    render: function(guess) {
        if (guess === this.secretNum){
             alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses`)
        } else if (guess < this.secretNum) {
            alert(`${guess} was too low, Try Again! - Previous guesses: ${this.prevGuesses.join(',')}`)
        } else {
         alert(`${guess} was too high, Try Again! - Previous guesses: ${this.prevGuesses.join(',')}`)
        }
    },
};

game.play();
