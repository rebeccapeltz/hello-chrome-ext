let greetCount = 0;
document.addEventListener("DOMContentLoaded",function(event){
    let nameEl = document.querySelector('#name');
    nameEl.addEventListener("keyup", function(){
        let greetingEl = document.querySelector('#greeting');
        greetingEl.innerHTML = `Hi, ${nameEl.value}!`;
        greetCount++;
        chrome.browserAction.setBadgeText({
            "text": greetCount.toString()
        });
    });
});