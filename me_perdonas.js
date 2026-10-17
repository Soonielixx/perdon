document.addEventListener('DOMContentLoaded', () => {
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const question = document.getElementById('question');
    const subtext = document.getElementById('subtext');
    const message = document.getElementById('message');
    const buttonsContainer = document.getElementById('buttons-container');
    const bgMusic = document.getElementById('bg-music');

    let musicPlayed = false;
    let clickCount = 0;

    // 📝 Aquí puedes cambiar o agregar todas las frases que quieras
    const frasesNo = [
        "¿Segura? 😢",
        "¿De verdad no? 💔",
        "Piénsalo bien por favor...",
        "¡No me hagas esto!",
        "Mira que me pongo a llorar 😭",
        "¡Ándale, di que sí!",
        "Dime que sí, no seas malita 🥺",
        "Me vas a romper el corazón..."
    ];

    // Función para reproducir la canción en el primer clic
    const playMusic = () => {
        if (!musicPlayed) {
            bgMusic.play();
            musicPlayed = true;
        }
    };

    // Acción cuando dice "Sí"
    btnYes.addEventListener('click', () => {
        playMusic();
        question.classList.add('hidden');
        subtext.classList.add('hidden');
        buttonsContainer.style.display = 'none';
        message.classList.remove('hidden');
    });

    // Acción cuando dice "No" (bucle de palabras)
    btnNo.addEventListener('click', () => {
        playMusic();
        
        // Cambiamos el texto de la pregunta por una de las frases del Array
        question.innerText = frasesNo[clickCount];
        subtext.innerText = "Por favor, presiona que 'Sí' 🙏";
        
        // Aumentamos el contador
        clickCount++;
        
        // Si llegamos a la última frase, reiniciamos el bucle
        if (clickCount >= frasesNo.length) {
            clickCount = 0;
        }

        // ✨ Truco extra: Hacer el botón "Sí" un poco más grande cada vez que presiona "No"
        let currentSize = window.getComputedStyle(btnYes).getPropertyValue('font-size');
        let newSize = parseFloat(currentSize) + 5; // Crece 5 pixeles
        btnYes.style.fontSize = newSize + 'px';
        btnYes.style.padding = "15px 40px"; 
    });
});
