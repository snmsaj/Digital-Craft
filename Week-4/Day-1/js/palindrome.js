let word = "Mom".toLowerCase()
let reversedWord = ""

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i]
}

function palindrome() {

    if (word == reversedWord) {
        return true
    }

    return false

}

console.log(palindrome())