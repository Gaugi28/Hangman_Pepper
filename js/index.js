window.onload = function () {
    $("#button_yes").on("mouseover", sendYesEvent);
    $("#button_no").on("mouseover", sendNoEvent);
};

function sendYesEvent() {
    ALTabletBinding.raiseEvent("yes");
};

function sendNoEvent() {
    ALTabletBinding.raiseEvent("exit");
};

    // Reset --> send Event
    document.getElementById('reset').mouseover = function() {
        ALTabletBinding.raiseEvent("reset");
    };
    // Stop --> send Event
    document.getElementById('stop').mouseover = function() {
        ALTabletBinding.raiseEvent("stop");
    };