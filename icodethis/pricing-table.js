window.onload = () => {

    // Write your JavaScript code here

    var showToastMsg = (msg) => {
        var toast = document.getElementById('toast');

        // replace previous toast with new element to re-trigger animation
        var newToast = toast.cloneNode(true);
        newToast.innerHTML = msg;
        newToast.classList.add('popDown'); // animation class
        toast.replaceWith(newToast);
    }

    var attachOnClickAlert = (id, msg) => {
        document.getElementById(id).addEventListener('click', () => showToastMsg(msg));
    };

    attachOnClickAlert('product-free', 'Free added to cart');
    attachOnClickAlert('product-standard', 'Standard subscription created');
    attachOnClickAlert('product-premium', 'Premium - good choice!');


}