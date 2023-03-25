const user = {
    name: 'Ashwani',
    lastTime: 'today'
}

const updateTime = function updateLastUSerActivityTime(){
    return new Promise( (resolve, reject) => {
        setTimeout( () =>{
            user.lastTime = new Date().getTime();
            console.log(user.lastTime);
            resolve(user.lastTime);
            //console.log(user)
        },1000)
    })
}

const postCreate = function createPost(){
    return new Promise((resolve, reject) =>{
        console.log('new post is created')
        resolve()
    })
}

const postDelete = function deletePost(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            delete user.lastTime;
        },1000)
    })
}






// createPost().then(() => {
//     updateLastUSerActivityTime().then(() => {
//         console.log(`${user.name} last active time is ${user.lastTime}`)
//     })
// })

Promise.all([postCreate(),updateTime()]).then( result => {
         console.log(`${user.name} last active time is ${user.lastTime}`)
 }).catch(error =>{
    console.log('An Error occured')
}).then(() => {
    postDelete();
 })
