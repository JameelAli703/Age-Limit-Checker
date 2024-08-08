document.getElementById("ageForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const ageInput = document.getElementById("age").value;
    const result = document.getElementById("message");

    if (ageInput === '') {
        message.textContent = 'Age cannot be empty.';
        message.style.color = 'red';
    } else if (isNaN(ageInput)) {
        message.textContent = 'Please enter a valid number.';
        message.style.color = 'red';
    } else {
        const age = parseInt(ageInput, 10);
        if (age < 18) {
            message.textContent = 'invalid age age is less than 18.';
            message.style.color = 'red';
        } else if (age > 60) {
            message.textContent = 'invalid age  agr is greater than 60.';
            message.style.color = 'red';
        } else {
            message.textContent = 'Age is valid.';
            message.style.color = 'green';
        }
}});