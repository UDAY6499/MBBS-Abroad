document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let country = document.getElementById('country').value;

    if (name && email && phone && country) {
        alert('Thank you for applying! We will contact you shortly.');
        
        this.submit();
    } else {
        alert('Please fill out all fields.');
    }
});


