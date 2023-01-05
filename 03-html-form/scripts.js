const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;
    
    const result = `Nome: ${name}\nE-mail: ${email}\nMessage: ${message}`;
    alert(result);
});
