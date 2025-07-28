// Botón de WhatsApp flotante
const whatsappButton = document.querySelector('.whatsapp-float');
const header = document.querySelector('header');

function handleScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Mostrar el botón después de que el header desaparezca (ajusta el 100 según tu header)
    if (scrollPosition > 100) {
        whatsappButton.classList.add('show');
    } else {
        whatsappButton.classList.remove('show');
    }
}

window.addEventListener('scroll', handleScroll);

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        item.classList.toggle('active');
    });
});