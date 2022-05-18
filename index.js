let origin = "";

window.addEventListener("load", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    origin = urlParams.get('origin')
})

document.getElementById("opener").addEventListener("click", () => {
    const popup = window.open(origin);
    console.log("send message");
    popup.postMessage("handshake", origin);
    setTimeout(() => {
        console.log("send message after 5000");
        popup.postMessage("handshake", origin);
    }, 5000)
});

window.addEventListener(
    "message",
    (event) => {
        console.log(event.origin, event.data);
        if (event.origin === origin && event.data === "handshake") {
            console.log(JSON.stringify(origin));
            console.log(JSON.stringify(event.data));
            document
                .getElementById("logger")
                .append(`<p>${JSON.stringify(event.data)}</p>`);
        }
    },
    false
);
