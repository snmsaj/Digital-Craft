const dishUL = document.getElementById("dishUL")
const starterBtn = document.getElementById("startersBtn")
const entreesBtn = document.getElementById("entreesBtn")
const dessertsBtn = document.getElementById("dessertsBtn")

function displayDishes(dishesToDisplay) {
    dishItems = dishesToDisplay.map(function(dish) {
        return `
                <li>
                    <h3>${dish.title}</h3>
                    <p>${dish.description}</p>
                    <p>$${dish.price}</p>
                    <img src="${dish.imageURL}">
                </li>
        `
    })
}

const starterList = dishes.filter(function(dish){
    return dish.course == "Starters"
})

let dishItems = starterList.map(function(dish) {
    return `
            <li>
                <h3>${dish.title}</h3>
                <p>${dish.description}</p>
                <p>$${dish.price}</p>
                <img src="${dish.imageURL}">
            </li>
    `
})

dishUL.insertAdjacentHTML("beforeend" , dishItems.join(""))


starterBtn.addEventListener("click", function() {
    const starterList = dishes.filter(function(dish){
        return dish.course == "Starters"
    })
    
    let dishItems = starterList.map(function(dish) {
        return `
                <li>
                    <h3>${dish.title}</h3>
                    <p>${dish.description}</p>
                    <p>$${dish.price}</p>
                    <img src="${dish.imageURL}">
                </li>
        `
    })

    dishUL.innerHTML = ""
    dishUL.insertAdjacentHTML("beforeend" , dishItems.join(""))
})


entreesBtn.addEventListener("click", function() {
    const entreesList = dishes.filter(function(dish){
        return dish.course == "Entrees"
    })
    
    let dishItems = entreesList.map(function(dish) {
        return `
                <li>
                    <h3>${dish.title}</h3>
                    <p>${dish.description}</p>
                    <p>$${dish.price}</p>
                    <img src="${dish.imageURL}">
                </li>
        `
    })

    dishUL.removeChild()
    dishUL.insertAdjacentHTML("beforeend" , dishItems.join(""))
})


dessertsBtn.addEventListener("click", function() {
    const dessertsList = dishes.filter(function(dish){
        return dish.course == "Desserts"
    })
    
    let dishItems = dessertsList.map(function(dish) {
        return `
                <li>
                    <h3>${dish.title}</h3>
                    <p>${dish.description}</p>
                    <p>$${dish.price}</p>
                    <img src="${dish.imageURL}">
                </li>
        `
    })

    dishUL.removeChild()
    dishUL.insertAdjacentHTML("beforeend" , dishItems.join(""))
})