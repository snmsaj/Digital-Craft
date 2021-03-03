const ordersUL = document.getElementById("ordersUL")


function getAllOrders(callback) {

    //By default HTTP request is always a GET when using fetch
    fetch('https://troubled-peaceful-hell.glitch.me/orders')
        .then((response) => {
            return response.json()
        }).then((posts) => {
            callback(posts)
        })
}

getAllOrders(function(orders) {
    let coffeeOrderItems = ordersList.map(function (order) {
        return `<li>
                    <p>Email: ${order.email}</p>
                    <p>Type: ${order.type}</p>
                    <p>Size: ${order.size}</p>
                    <p>Price: $${order.price}</p>
                </li>`
    })
    coffeeUL.innerHTML = coffeeOrderItems.join("")
})

getAllOrders()

POST
fetch('https://troubled-peaceful-hell.glitch.me/orders'), {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        email: "",
        type: "",
        size: "",
        price: parseFloat()
    })
}