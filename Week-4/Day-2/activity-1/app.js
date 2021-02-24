let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let submitBtn = document.getElementById("submitBtn")
let fullName = document.getElementById("fullName")

submitBtn.addEventListener("click", function() {
    fullName.innerHTML = firstName.value + " " + lastName.value
})