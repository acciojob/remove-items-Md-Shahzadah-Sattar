//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const removeButton = document.querySelector('input[type="button"]');
    const colorSelect = document.getElementById('colorSelect');

    removeButton.addEventListener('click', function () {
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];

        if (selectedOption) {
            colorSelect.removeChild(selectedOption);
        }
    });
});
