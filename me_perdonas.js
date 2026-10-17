document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const message = document.getElementById('message');
    const buttonsContainer = document.querySelector('.buttons');

    // Acción cuando dice "Sí"
    btnYes.addEventListener('click', () => {
        message.classList.remove('hidden'); // Muestra el mensaje
        buttonsContainer.style.display = 'none'; // Oculta los botones
    });

    // Acción para que el botón "No" escape
    const moveButton = () => {
        // Cambiamos a absolute solo cuando intentan tocarlo para no romper el diseño inicial
        btnNo.style.position = 'absolute';
        
        const maxX = window.innerWidth - btnNo.offsetWidth - 20;
        const maxY = window.innerHeight - btnNo.offsetHeight - 20;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
    };

    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('touchstart', moveButton);
});
