window.onload = function () {
    $("#reset").on("mouseover", sendResetEvent);
    $("#exit").on("mouseover", sendExitEvent);
};

function sendResetEvent() {
    ALTabletBinding.raiseEvent("reset");
};

function sendExitEvent() {
    ALTabletBinding.raiseEvent("exit");
};
