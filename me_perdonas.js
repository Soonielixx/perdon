document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const message = document.getElementById('message');
    const buttonsContainer = document.querySelector('.buttons');

    // Acción para el botón "Sí"
    btnYes.addEventListener('click', () => {
        message.classList.remove('hidden');
        buttonsContainer.style.display = 'none'; // Oculta los botones
        createConfetti(); // Opcional: crea corazones cayendo
    });

    // Acción para el botón "No" (se escapa)
    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('touchstart', moveButton); // Para pantallas táctiles

    function moveButton() {
        const x = Math.random() * (window.innerWidth - btnNo.offsetWidth) - (window.innerWidth / 2 - btnNo.offsetWidth / 2);
        const y = Math.random() * (window.innerHeight - btnNo.offsetHeight) - (window.innerHeight / 2 - btnNo.offsetHeight / 2);
        
        btnNo.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Función extra para hacer llover corazones cuando dice que sí
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-5vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.body.appendChild(heart);

        // Estilos para la animación de caída insertados dinámicamente
        if (!document.getElementById('heart-animation')) {
            const style = document.createElement('style');
            style.id = 'heart-animation';
            style.innerHTML = `
                @keyframes fall {
                    to { transform: translateY(105vh); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}
