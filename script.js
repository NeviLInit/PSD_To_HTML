document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.page3pics');
    const images = document.querySelectorAll('.page3pics img');
    const imageWidth = images[0].clientWidth;

    function startSlider() {
        container.style.transition = 'transform 1s ease-in-out'; 
        container.style.transform = `translateX(-${imageWidth}px)`;
        container.addEventListener('transitionend', function () {
            container.style.transition = 'none';
            container.style.transform = 'translateX(0)';
            container.appendChild(container.firstElementChild);
        }, { once: true });
    }

    setInterval(startSlider, 3000);
});


document.getElementById('pagesdropdownToggle').addEventListener('click', function (event) {
event.preventDefault();
var dropdownContent = document.getElementById('dropdownContent');
var icon = document.getElementById('icon');
dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
icon.innerText = (dropdownContent.style.display === 'block') ? 'remove' : 'add'; })
