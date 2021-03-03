const coffeeOrdersUL = document.getElementById("coffeeOrdersUL")
const searchEmailTextBox = document.getElementById("searchEmailTextBox")
const viewOrdersBTN = document.getElementById("viewOrdersBTN")

// Fetch all orders
function fetchOrders(displayFunction) {
    let request = new XMLHttpRequest()

    request.addEventListener('load', function () {
        let coffeeOrders = JSON.parse(this.responseText)

        displayFunction(coffeeOrders)

    })
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.send()
}

// Display all orders
function displayOrders(ordersList) {

    let coffeeOrderItems = ordersList.map(function (order) {
        return `<li>
                    <p>Email: ${order.email}</p>
                    <p>Type: ${order.type}</p>
                    <p>Size: ${order.size}</p>
                    <p>Price: $${order.price}</p>
                </li>`
    })
    coffeeOrdersUL.innerHTML = coffeeOrderItems.join("")
}

// Search order by email
function searchEmail(email) {
    let fetchOrderByEmail = new XMLHttpRequest()
    let order = JSON.parse(this.responseText)
    fetchOrderByEmail.addEventListener('load', function() {
        let coffeeOrderItems = `<li>
                                    <p>Email: ${order.email}</p>
                                    <p>Type: ${order.type}</p>
                                    <p>Size: ${order.size}</p>
                                    <p>Price: $${order.price}</p>
                                </li>`
        
        coffeeOrdersUL.innerHTML = coffeeOrderItems
    })

    fetchOrderByEmail.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
    fetchOrderByEmail.send()
}


fetchOrders(displayOrders)

viewOrdersBTN.addEventListener('click', function() {
    searchEmail(searchEmailTextBox.value)
})