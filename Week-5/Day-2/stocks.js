const titleTextBox = document.getElementById("titleTextBox")
const symbolTextBox = document.getElementById("symbolTextBox")
const priceTextBox = document.getElementById("priceTextBox")
const quantityTextBox = document.getElementById("quantityTextBox")
const postBTN = document.getElementById("postBTN")
const stocksUL = document.getElementById("stocksUL")

postBTN.addEventListener("click", function() {
    const title = titleTextBox.value
    const symbol = symbolTextBox.value
    const price = priceTextBox.value
    const quantity = quantityTextBox.value

    const requestParams = {
        title: title,
        symbol: symbol,
        price: parseFloat(price),
        quantity: parseInt(quantity)
    }

    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        console.log(this.responseText)
    })

    request.open("POST", "https://endurable-bead-polo.glitch.me/stocks")
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(requestParams))
})
