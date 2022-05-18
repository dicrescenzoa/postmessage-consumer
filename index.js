let origin = "";

window.addEventListener("load", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    origin = urlParams.get('origin')
})

document.getElementById("opener").addEventListener("click", () => {
    const popup = window.open(origin);
    popup.addEventListener("load", () => {
        console.log("popup loaded, send handshake");
        popup.postMessage("handshake", origin);
    }, false);
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
