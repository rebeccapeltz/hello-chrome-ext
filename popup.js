let greetCount = 0;
document.addEventListener("DOMContentLoaded", function (event) {
    let nameEl = document.querySelector('#name');
    nameEl.addEventListener("keyup", function () {
        let greetingEl = document.querySelector('#greeting');
        greetingEl.innerHTML = `Hi, ${nameEl.value}!`;
        greetCount++;
        chrome.browserAction.setBadgeText({
            "text": greetCount.toString()
        });
    });
    let setBackgroundEl = document.querySelector("#set-background");
    setBackgroundEl.addEventListener("click", function (event) {
        chrome.tabs.executeScript(null, {
            code: "document.body.style.backgroundColor='red'"
        });
        window.close();
    })
});