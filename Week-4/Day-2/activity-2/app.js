const redButton = document.getElementById("redButton")
const blueButton = document.getElementById("blueButton")
const bodyColor = document.getElementById("bodyColor")

redButton.addEventListener("click", function() {
    document.body.className = "red"
    bodyColor.style.background="red";
})

blueButton.addEventListener("click", function() {
    bodyColor.style.background="blue";
})
