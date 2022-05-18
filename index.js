let origin = "";

window.addEventListener("load", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    origin = urlParams.get('origin')
})

document.getElementById("opener").addEventListener("click", () => {
    const popup = window.open(origin);
    console.log("send handshake");
    popup.postMessage("handshake", origin);
});

window.addEventListener(
    "message",
    (event) => {
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
