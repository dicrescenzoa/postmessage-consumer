let source = null;
let origin = null;

window.addEventListener(
    "message",
    (event) => {
        if (event.data === "handshake") {
            console.log("received handshake!!!");
            source = event.source;
            origin = event.origin;
            event.source.postMessage("handshake", event.origin);
        }
    },
    false
);

document.getElementById("sendmsg").addEventListener("click", () => {
    console.log("send Message!!!", source, origin);
    if (!!source && !!origin) {
        source.postMessage("handshake", origin);
    }
});
