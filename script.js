var inputField = document.getElementById("input-area");
var messageBox = document.getElementById("message-box");
var bottomPadding = document.getElementById("bottom");

function sendUsingEnter(e) {
    if (e.keyCode == 13) {
        send();
    }
}

function send() {
    addText(inputField.value);
    setTimeout(() => inputField.value = "", 10);
}

function addText(message) {
    var newElement = document.createElement("div");
    newElement.className = "alert btn-primary text-wrap defaults to-text";
    newElement.append(document.createTextNode(message));
    bottomPadding.before(newElement);
    messageBox.scrollTop = messageBox.scrollHeight;
}