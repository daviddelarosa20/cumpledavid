document.addEventListener('DOMContentLoaded', function() {
    const toggleIcon = document.getElementById('toggle-icon');
    const divToToggle = document.getElementById('divToToggle');

    toggleIcon.addEventListener('click', function() {
        // Alternar la visibilidad del div
        if (divToToggle.style.display === 'none') {
            divToToggle.style.display = 'block';
        } else {
            divToToggle.style.display = 'none';
        };
    });
});