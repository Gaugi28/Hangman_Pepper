window.onload = function () {
    $("#button_yes").on("mouseover", sendYesEvent);
    $("#button_no").on("mouseover", sendNoEvent);
    $("#reset").on("mouseover", sendResetEvent);
    $("#stop").on("mouseover", sendStopEvent);
};

function sendYesEvent() {
    ALTabletBinding.raiseEvent("yes");
};

function sendNoEvent() {
    ALTabletBinding.raiseEvent("exit");
};

function sendResetEvent() {
    ALTabletBinding.raiseEvent("reset");
};

function sendStopEvent() {
    ALTabletBinding.raiseEvent("stop");
};