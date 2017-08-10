window.onload = function () {
    $("#reset").on("click", sendResetEvent);
    $("#exit").on("click", sendExitEvent);
};

function sendResetEvent() {
    ALTabletBinding.raiseEvent("reset");
};

function sendExitEvent() {
    ALTabletBinding.raiseEvent("exit");
};
