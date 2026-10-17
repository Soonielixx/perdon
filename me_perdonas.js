document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const question = document.getElementById('question');
    const subtext = document.getElementById('subtext');
    const message = document.getElementById('message');
    const buttonsContainer = document.getElementById('buttons-container');
    const bgMusic = document.getElementById('bg-music');

    let clickCount = 0;

    // Las frases dramáticas en bucle
    const frasesNo = [
        "¡Me queda 1% de vida! 😵",
        "¡Siento que me desmayo! 💔",
        "¡Llamen a una ambulancia! 🚑",
        "¡Veo la luz al final del túnel! 👼",
        "¡Mi corazón se está deteniendo! 📉",
        "¡Última oportunidad para salvarme! 🥺"
    ];

    // Acción para salvarte (Botón Sí)
    btnYes.addEventListener('click', () => {
        bgMusic.play(); // Aquí arranca la canción
        
        question.classList.add('hidden');
        subtext.classList.add('hidden');
        buttonsContainer.style.display = 'none';
        
        message.classList.remove('hidden'); // Muestra el mensaje y la foto
    });

    // Acción de agonía (Botón No)
    btnNo.addEventListener('click', () => {
        question.innerText = frasesNo[clickCount];
        subtext.innerText = "¡Me voy a morir en serio!";
        
        clickCount++;
        if (clickCount >= frasesNo.length) {
            clickCount = 0;
        }

        // El botón "Sí" se hace más grande para que sea más fácil salvarte
        let currentSize = window.getComputedStyle(btnYes).getPropertyValue('font-size');
        let newSize = parseFloat(currentSize) + 5;
        btnYes.style.fontSize = newSize + 'px';
        btnYes.style.padding = "15px 40px"; 
    });
});
