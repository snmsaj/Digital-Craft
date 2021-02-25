const postsUL = document.getElementById("postsUL")

for(let i = 0; i < posts.length; i++) {

    let post = posts[i]

    const postItem = `
                    <li>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </li>
    `

    postsUL.insertAdjacentHTML('beforeend', postItem)
}