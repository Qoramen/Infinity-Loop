function toggleHeading() {
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');

    // Toggle the visibility of the headings
    if (icon1.style.display === 'block') {
        icon1.style.display = 'none';
        icon2.style.display = 'block';
    } else {
        icon1.style.display = 'block';
        icon2.style.display = 'none';
    }
}

const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
});