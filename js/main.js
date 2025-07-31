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

document.addEventListener('DOMContentLoaded', function () {
    // Verificar si iubenda se ha inicializado
    if (window._iub) {
        console.log('iubenda está cargado correctamente');
    } else {
        console.error('iubenda no se ha cargado - cargando manualmente');
        // Cargar manualmente los scripts si fallaron
        const loadScript = (src) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.head.appendChild(script);
        };

        loadScript('https://cs.iubenda.com/autoblocking/4184107.js');
        loadScript('//cdn.iubenda.com/cs/gpp/stub.js');
        loadScript('//cdn.iubenda.com/cs/iubenda_cs.js');
    }

    // Verificar si el banner está visible
    setTimeout(() => {
        const banner = document.querySelector('.iubenda-cs-banner');
        if (banner) {
            console.log('Banner de cookies visible');
        } else {
            console.warn('Banner no visible - mostrando versión de respaldo');
            showFallbackCookieBanner();
        }
    }, 2000);
});

// Banner de respaldo en caso de fallo
function showFallbackCookieBanner() {
    const bannerHTML = `
        <div id="fallback-cookie-banner" style="
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #0a6b3a;
            color: white;
            padding: 15px;
            z-index: 10000;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
        ">
            <div style="
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
            ">
                <p style="margin: 0; flex: 1; min-width: 300px; padding: 10px;">
                    Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas su uso.
                </p>
                <div style="display: flex; gap: 10px; padding: 10px;">
                    <button id="accept-cookies" style="
                        background: #ffd700;
                        color: #0a6b3a;
                        border: none;
                        border-radius: 30px;
                        padding: 10px 20px;
                        font-weight: 600;
                        cursor: pointer;
                    ">Aceptar</button>
                    <button id="customize-cookies" style="
                        background: transparent;
                        border: 1px solid #ffd700;
                        color: #ffd700;
                        border-radius: 30px;
                        padding: 10px 20px;
                        font-weight: 600;
                        cursor: pointer;
                    ">Personalizar</button>
                </div>
            </div>
        </div>`;

    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    // Manejar clics en el banner de respaldo
    document.getElementById('accept-cookies').addEventListener('click', function () {
        document.getElementById('fallback-cookie-banner').style.display = 'none';
        // Aquí puedes agregar lógica para guardar la preferencia
    });

    document.getElementById('customize-cookies').addEventListener('click', function () {
        alert('Configuración de cookies - Esta funcionalidad requiere iubenda');
    });
}