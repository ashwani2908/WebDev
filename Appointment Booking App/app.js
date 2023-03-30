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

        // let stringObj = JSON.stringify(object);
        // localStorage.setItem('userDetail'+ emailId, stringObj);
        axios.post("https://crudcrud.com/api/7f1d57d17cbf44258aa81d8a0c4cda11/appointmentapp", object)
            .then(res => {
                addNewDetail(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));

        
    }
};

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/7f1d57d17cbf44258aa81d8a0c4cda11/appointmentapp")
            .then(res => {
                //console.log(res.data)
                for(var i=0; i< res.data.length;i++){
                    // console.log(res.data[i])
                    addNewDetail(res.data[i])
                }
            }).catch(err => console.log(err))
})

function addNewDetail(object){
    const ul = document.getElementById('container');
    const li = document.createElement('li');
    
    li.appendChild(document.createTextNode(object.name + " | " + object.emailId + " "));
        //Edit Function
        let editBtn = document.createElement('input');
        editBtn.id = 'edit';
        editBtn.type = 'button';
        editBtn.value = 'Edit';
        editBtn.addEventListener('click', ()=>{
            document.getElementById('name').value = object.name;
            document.getElementById('email').value = object.emailId;
            li.remove();
        });

        
        li.appendChild(editBtn);
        
        // Delete Buttun
        let deleteBtn = document.createElement('input');
        deleteBtn.id = 'delete';
        deleteBtn.type = 'button';
        deleteBtn.value = 'Delete';
        deleteBtn.addEventListener('click', ()=>{
            axios.delete(`https://crudcrud.com/api/7f1d57d17cbf44258aa81d8a0c4cda11/appointmentapp/${object._id}`)
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err))
            li.remove();
        });
        
        li.appendChild(deleteBtn);


    
    ul.appendChild(li);

};





// function deleteDetail(e,object){
//     e.preventDefault();
//     localStorage.removeItem('userDetail'+ object.emailId);
    
// }



