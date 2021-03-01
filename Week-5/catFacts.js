const factsUL = document.getElementById("factsUL")
const catFactsURL = "https://cat-fact.herokuapp.com/facts"

let request = new XMLHttpRequest()

request.addEventListener('load', function() {
    let catFacts = JSON.parse(this.responseText)

    let catFactItems = catFacts.map(function(fact) {
        return `<li>
                    ${fact.text}
                </li>`
    })

    factsUL.innerHTML = catFactItems.join("")
    
})

request.open('GET', catFactsURL)
request.send()