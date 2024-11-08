window.onload = function () {

    // Write your JavaScript code here
    var dialog = document.getElementById('form');

    var closeButton = document.getElementById('close');
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    var openShareButton = document.getElementById('openShare');
    openShareButton.addEventListener("click", () => {
        dialog.showModal();
    });

    dialog.showModal();

};