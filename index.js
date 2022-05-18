const origin = "https://kc19vk.csb.app";

document.getElementById("opener").addEventListener("click", () => {
    const popup = window.open(origin);
    popup.addEventListener("load", () => {
        popup.postMessage("handshake", origin);
    });
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
