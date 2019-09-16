const axios = require('axios')
async function getData() {
    let posts = []
    let users = []
    await axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
        posts = result.data
    })
    await axios.get('https://jsonplaceholder.typicode.com/users').then((result) => {
        users = result.data

    })
    let output = []
    users.filter(async(usersItem) => {
        posts.forEach(postsItem => {
            if (usersItem.id === postsItem.userId) {
                output.push({ ...postsItem,user: {...usersItem}, })
            }
        });
    })

    console.log(output);
}

getData()