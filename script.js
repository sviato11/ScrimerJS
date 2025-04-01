function startScreamer() {
    document.getElementById('startBtn').style.display = 'none';

    document.body.innerHTML += '<p id="fakeText" style="font-size: 24px; color: white; text-align: center;">На самом деле, здесь нет ничего страшного! 😊</p>';

    setTimeout(() => {
        document.getElementById('fakeText').remove();


        let flashInterval = setInterval(() => {
            document.body.style.background = document.body.style.background === 'black' ? 'white' : 'black';
        }, 50);
        setTimeout(() => clearInterval(flashInterval), 800);

        // Включение скримера (ОСТАЛАСЬ ТОЛЬКО КАРТИНКА)
        const screamer = document.getElementById('screamer');
        screamer.style.display = 'flex';

        // Создание звука через Web Audio API
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(1, audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
        }, 3000);

        document.body.style.cursor = 'none';
        document.addEventListener('keydown', (event) => event.preventDefault());


        setTimeout(() => {
            document.body.style.background = 'white';
            setTimeout(() => document.body.style.background = 'black', 100);
        }, 5000);

    }, 3000);
}