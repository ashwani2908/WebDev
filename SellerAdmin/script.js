const btn = document.getElementById('submit');
const totalValue = document.getElementById('price');

btn.addEventListener("click",addBtn);

let sum = 0;

function addBtn(e){
    e.preventDefault();
    const sellingPrice = document.getElementById('selling-price').value;
    const productName = document.getElementById('product-name').value;
    
    const buyer = {
        sellingPrice,
        productName
    };
    axios.post("https://crudcrud.com/api/d56e029909f947c5acfe7f3ec2d0a69c/buyer", buyer)
    .then(res => {
        showProduct(res.data);
        
    })
    .catch(err => console.log(err));
    
}

function showProduct(buyer){
    const ul = document.getElementById('selected-product');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(buyer.sellingPrice + " | " + buyer.productName + " "));
    
    //DELETE
    let deleteBtn = document.createElement('input');
        deleteBtn.id = 'delete';
        deleteBtn.type = 'button';
        deleteBtn.value = 'Delete';
        deleteBtn.addEventListener('click', () => {
            axios.delete(`https://crudcrud.com/api/d56e029909f947c5acfe7f3ec2d0a69c/buyer/${buyer._id}`)
                .then(res => {
                    console.log(`${buyer._id} id has been deleted`);
             })
                .catch(err => console.log(err));
            li.remove();
        })
    li.appendChild(deleteBtn);
    
    ul.appendChild(li)
}

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/d56e029909f947c5acfe7f3ec2d0a69c/buyer")
            .then(res => {
                for(var i=0; i< res.data.length;i++){
                    showProduct(res.data[i])
                    sum = sum + Number(res.data[i].sellingPrice);
                }
                totalValue.innerHTML = sum;
                
            }).catch(err => console.log(err))

    
})
