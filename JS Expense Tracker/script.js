const inputField1 = document.querySelector('.data1');
const inputField2 = document.querySelector('.data2');
const inputField3 = document.querySelector('.data3');
const btn1 = document.querySelector('.btn1');
const table = document.querySelector('.table1');
const td1 = document.querySelector('.td1');
const td2 = document.querySelector('.td2');
const td3 = document.querySelector('.td3');
const td4 = document.querySelector('.td4');
const span = document.querySelector('.span');
const sve = document.querySelector('.tr2');

// Add event
btn1.addEventListener('click', addToTable);

function addToTable(e) {
    // Prevent
    e.preventDefault();

    // Create element(tr and delete button) which go in table
    const tr1 = document.createElement('tr');
    const tr2 = document.createElement('tr');
    const tr3 = document.createElement('tr');
    const button = document.createElement('button');

    // What we write in field that will be written
    // When we write something in name field span with text will remove
    if (tr1.innerHTML = inputField1.value) {
        span.remove();
    }
    else {
        alert('Fill empty field!');
        tr1.remove();
        tr2.remove();
        tr3.remove();
        button.remove();
    }

    if (tr2.innerHTML = inputField2.value) {
        tr2.innerHTML = inputField2.value;
    }
    else {
        alert('Fill empty field!');
        tr2.remove();
        tr1.remove();
        tr3.remove();
        button.remove();
    }

    if (tr3.innerHTML = inputField3.value) {
        tr3.innerHTML = '<i class="fas fa-dollar-sign"></i> ' + inputField3.value;
    }
    else {
        alert('Fill empty field!');
        tr3.remove();
        tr1.remove();
        tr2.remove();
        button.remove();
    }

    // Give button class
    button.innerHTML = '<i class="fas fa-trash"></i>';
    button.className = 'btn2';
    button.addEventListener('click', function() {
        tr1.remove();
        tr2.remove();
        tr3.remove();
        button.remove();
    });

    // Append in td
    td1.appendChild(tr1);
    td2.appendChild(tr2);
    td3.appendChild(tr3);
    td4.appendChild(button);

    // After click on button field will be empty
    inputField1.value = '';
    inputField2.value = '';
    inputField3.value = '';

    // Append in table
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    table.appendChild(td4);
};