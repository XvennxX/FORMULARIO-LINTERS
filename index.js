document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('number').value;
        const option = document.getElementById('dropdown').value;
        const accountType = document.querySelector('input[name="account-type"]:checked').value;
        const favoriteBrand = document.querySelector('#brands select').value;
        const transportation = [];
        const transportationCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        transportationCheckboxes.forEach(function(checkbox) {
            transportation.push(checkbox.value);
        });
        const comments = document.getElementById('comments').value;

        // Aquí puedes manejar los datos, como enviarlos a un servidor o procesarlos de alguna forma.
        console.log({
            name,
            email,
            age,
            option,
            accountType,
            favoriteBrand,
            transportation,
            comments
        });

        // Puedes mostrar un mensaje de agradecimiento o redirigir a otra página
        alert('Gracias por enviar tus datos.');
    });
});
