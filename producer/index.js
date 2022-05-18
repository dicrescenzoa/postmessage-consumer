let source = null;
let origin = null;

window.addEventListener(
    "message",
    (event) => {
        if (event.data === "handshake") {
            source = event.source;
            origin = event.origin;
            event.source.postMessage("hi there!", event.origin);
        }
    },
    false
);

document.getElementById("sendmsg").addEventListener("click", () => {
    console.log("send Message!!!");
    if (!!source && !!origin) {
        source.postMessage("handshake", origin);
    }
});
