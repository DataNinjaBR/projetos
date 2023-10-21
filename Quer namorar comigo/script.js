function goToVideo() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";  // Altere para o link do vídeo que desejar
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const x = Math.floor(Math.random() * window.innerWidth * 0.8);
    const y = Math.floor(Math.random() * window.innerHeight * 0.8);
    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
}
