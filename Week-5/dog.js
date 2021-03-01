const newDogBTN = document.getElementById("newDogBTN")
const divImage = document.getElementById("divImage")


newDogBTN.addEventListener("click", function() {
    const dogURL = "https://dog.ceo/api/breeds/image/random"

    let request = new XMLHttpRequest()
    request.addEventListener("load", function() {
        let result = JSON.parse(this.responseText)
        let dogIMG = `<img src="${result.message}">`

        divImage.innerHTML = dogIMG
    })

    request.open("GET", dogURL)
    request.send()
})



