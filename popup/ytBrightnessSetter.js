// based off https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page

function restoreOptions() {
    function onError(error) {
        console.log(`Error: ${error}`);
    }


    browser.storage.sync.get("ytBrightness").then(function (result) {
        document.getElementById('ytBrightnessSlider').value = result.ytBrightness || 100;
    }, onError);

    browser.storage.sync.get("ytDoLiveUpdate").then(function (result) {
        document.getElementById('ytDoLiveUpdate').value = result.ytDoLiveUpdate;
    }, onError);
}

document.addEventListener('DOMContentLoaded', restoreOptions);


function saveOptions(e) {
    e.preventDefault();

    browser.storage.sync.set({
        ytBrightness: document.getElementById("ytBrightnessSlider").value,
    });
    browser.storage.sync.set({
        ytDoLiveUpdate: document.getElementById("ytDoLiveUpdate").value,
    });
}

document.getElementById('ytDimmer').addEventListener("submit", saveOptions);