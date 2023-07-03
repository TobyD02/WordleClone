let guesses = 6
let guess_count = 0
let current_guess = []

// Gather rows
let rows = document.getElementsByClassName('row')

let current_row = rows[guess_count]

let word = get_word()

window.addEventListener('keypress', (e) => {
    console.log(e.key)
    switch (e.key) {
        case 'Enter':
            make_guess()
            break;
        case 'Backspace':
            remove_letter()
            break;
        default:
            add_letter(e.key)
            break;
        
    }
})

function make_guess() {

    // Make sure to handle double letters
    console.log(current_guess)
    console.log(word)

    if (current_guess.length == 5) {
        for (let i = 0; i < 5; i++) {
            console.log(word.indexOf(current_guess[i]))
            if (current_guess[i] == word[i]) {
                console.log('green')
                current_row.querySelectorAll('.cell')[i].style.backgroundColor = 'green'
            } else if (word.indexOf(current_guess[i]) > -1) {
                console.log('yellow')
                current_row.querySelectorAll('.cell')[i].style.backgroundColor = 'yellow'
            } else {
                current_row.querySelectorAll('.cell')[i].style.backgroundColor = '#333'
            }
        }

        guess_count ++
        current_row = rows[guess_count]
    }
}

function get_word() {
    let currentDate = new Date();
    let dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    let seed = dayOfYear;
    let word = words[seed % words.length];
    return word.split('')
}

function add_letter(letter) {
    if (current_guess.length < 5){
        let len = current_guess.length
        current_guess.push(letter)
        console.log(current_row.querySelector('.cell'))
        current_row.querySelectorAll('.cell')[len].textContent = letter
        current_row.querySelectorAll('.cell')[len].style.backgroundColor = 'cyan'
    }
}

function remove_letter() {
    if (current_guess.length != 0) {
        let len = current_guess.length
        current_guess.pop()
        current_row.querySelectorAll('.cell')[len-1].textContent = ''
    }
}