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

    // Reset --> send Event
    document.getElementById('reset').onclick = function() {
        ALTabletBinding.raiseEvent("reset");
    };
    // Stop --> send Event
    document.getElementById('stop').onclick = function() {
        ALTabletBinding.raiseEvent("stop");
    };