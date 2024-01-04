function onError(error) {
    console.log(`Error: ${error}`);
}

function onGot(item) {
    let ytBrightness = 100; // default brightness
    if (item.ytBrightness) {
        ytBrightness = item.ytBrightness;
    }


    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.style.filter = `brightness(${ytBrightness}%)`;
    });
}

const getting = browser.storage.sync.get("ytBrightness");
getting.then(onGot, onError);