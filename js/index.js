window.onload = function () {
    $("#button_yes").on("click", sendYesEvent);
    $("#button_no").on("click", sendNoEvent);
};

function sendYesEvent() {
    ALTabletBinding.raiseEvent("yes");
};

function sendNoEvent() {
    ALTabletBinding.raiseEvent("exit");
};
