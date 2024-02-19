const scrollContainer = document.querySelector(".page3pics");
let scrollSpeed = 1;
let scrollDirection = 1;
let scrollInterval = setInterval(autoScroll, 16);
function autoScroll() {
    let targetScrollLeft = scrollContainer.scrollLeft + scrollSpeed * scrollDirection;
    if ((scrollDirection === 1 && targetScrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) ||
        (scrollDirection === -1 && targetScrollLeft <= 0)) {
        targetScrollLeft = scrollDirection === 1 ? 0 : scrollContainer.scrollWidth - scrollContainer.clientWidth;
    }
    requestAnimationFrame(() => {
        scrollContainer.scrollLeft = targetScrollLeft;
    });
}
function stopAutoScroll() {
    clearInterval(scrollInterval);
}


document.getElementById('pagesdropdownToggle').addEventListener('click', function (event) {
event.preventDefault();
var dropdownContent = document.getElementById('dropdownContent');
var icon = document.getElementById('icon');
dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
icon.innerText = (dropdownContent.style.display === 'block') ? 'remove' : 'add'; })
