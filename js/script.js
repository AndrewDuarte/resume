
// Show Popup box onClick
function showClick() {
    var infoBtn = document.getElementById('info');
    infoBtn.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('.popup-overlay').classList.add('show');
        console.log(event);
    });
} showClick();

// Hide Popup box onClick
function hideClick() {
    var x = document.getElementsByClassName('close')[0];
    x.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector('.popup-overlay').classList.remove('show');
    })
}hideClick();