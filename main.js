// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    //store name in storage
    storeNameInLocalStorage(nameInput.value);
    // Store email
    storeEmailInLocalStorage(emailInput.value);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

function storeNameInLocalStorage(name){
    let names;
    if(localStorage.getItem('Name')=== null){
        names = [];
    }else{
        names = JSON.parse(localStorage.getItem('names'));
    }
    names.push(name);
    localStorage.setItem('names', JSON.stringify(names));
}

function storeEmailInLocalStorage(email){
    let emails;
    if(localStorage.getItem('Emails')=== null){
        emails = [];
    }else{
        names = JSON.parse(localStorage.getItem('emails'));
    }
    emails.push(email);
    localStorage.setItem('emails', JSON.stringify(emails));
}