console.log('hello');

const progress = document.querySelector('#progress');
const song = document.querySelector('#song');
const ctrlIcon = document.querySelector('#ctrlIcon');

// Set progress bar max value when metadata is loaded
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

// Play/Pause functionality
playPause = () => {
    if (ctrlIcon.classList.contains('fa-play')) {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    } else {
        song.pause();
        ctrlIcon.classList.add('fa-play');
        ctrlIcon.classList.remove('fa-pause');
    }
}

// Update progress bar as the song plays
song.addEventListener('timeupdate', () => {
    // Log the current time to check if timeupdate is working
    console.log('Current time: ', song.currentTime);
    // Update the progress bar
    progress.value = song.currentTime;
});

// Allow users to change the progress bar manually
progress.onchange = () => {
    // Set song current time to the selected value
    song.currentTime = progress.value;
    
    // Play the song if it was paused
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}





