const user = {
    name: 'Ashwani',
    lastTime: 'today'
};





const updateLastActive = async () => {
    let postCreate = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('new post is created')
            resolve()
        },1000)    
    });
    
    const updateLastUSerActivityTime = new Promise((resolve, reject) => {
        setTimeout( () =>{
            user.lastTime = new Date().getTime();
            console.log(user.lastTime);
            resolve(user.lastTime);
            //console.log(user)
        },2000)
    });

    const postDelete = new Promise((resolve, reject) =>{
            setTimeout(() => {
                console.log(user)
                delete user.lastTime;
                console.log(user)
            },5000)
    });
        



    let postCreated = await postCreate;
    console.log('post created');
    
    let updateTime = await updateLastUSerActivityTime;
    console.log('updated time');

    let deletepostAll = await postDelete;
    console.log('post Deleted');

}

updateLastActive();