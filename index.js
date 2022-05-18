let url = null;
let popup = "";
let interval = null;

window.addEventListener("load", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    url = new URL(urlParams.get('href'));
})

const polling = () => {
    interval = setInterval(() => {
        console.log("polling HANDSHAKE-SYN...");
        popup.postMessage("HANDSHAKE-SYN", url.href);
    }, 500);
}

document.getElementById("opener").addEventListener("click", () => {
    popup = window.open(url.href);
    polling();
});

window.addEventListener(
    "message",
    (event) => {
        console.log(event.origin, event.data);
        if(event.origin === url.origin) {
            if (event.data === "HANDSHAKE-ACK") {
                clearInterval(interval);
            }
                document
                    .getElementById("logger")
                    .append(`<p>${JSON.stringify(event.data)}</p>`);
        }
    },
    false
);
