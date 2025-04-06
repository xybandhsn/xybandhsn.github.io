const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const loopBtn = document.getElementById('loop-btn');
let isLooping = false;

// Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="bx bx-pause"></i>';
        document.querySelector('.cover-art').style.animationPlayState = 'running';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="bx bx-play"></i>';
        document.querySelector('.cover-art').style.animationPlayState = 'paused';
    }
});

// Progress bar
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
});

progress.addEventListener('input', () => {
    const seekTime = (progress.value * audio.duration) / 100;
    audio.currentTime = seekTime;
});

// Loop button
loopBtn.addEventListener('click', () => {
    isLooping = !isLooping;
    audio.loop = isLooping;
    loopBtn.style.color = isLooping ? '#1DB954' : '#fff';
});

// Song ended
audio.addEventListener('ended', () => {
    playBtn.innerHTML = '<i class="bx bx-play"></i>';
    document.querySelector('.cover-art').style.animationPlayState = 'paused';
});