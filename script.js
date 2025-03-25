document.addEventListener('DOMContentLoaded', () => {
    // Inicializar EmailJS
    emailjs.init('YOUR_USER_ID');

    // Manejar el envío del formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        try {
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { name, email, message });
            alert('Mensaje enviado con éxito');
            form.reset();
        } catch (error) {
            alert('Error al enviar el mensaje');
            console.error(error);
        }
    });
});
