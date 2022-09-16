const btn = document.getElementById('submit');

btn.addEventListener("click", submitBtn);

function submitBtn(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const emailId = document.getElementById('email').value;
    if (name.length>0 && emailId.length>0){
        const object = {
            name: name,
            emailId: emailId
        };

        let stringObj = JSON.stringify(object);
        localStorage.setItem('userDetail', stringObj);

        console.log(stringObj);

        addNewDetail(object);
        
    }
};

function addNewDetail(object){
    const ul = document.getElementById('container');
    const li = document.createElement('li');
    
    li.appendChild(document.createTextNode(object.name + " " + object.emailId));

    ul.appendChild(li);
    console.log(ul);
}

