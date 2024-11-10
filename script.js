var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
if (toggleButton && skills) {
    toggleButton.addEventListener('click', function () {
        // Check if the skills section is visible or not
        if (skills.style.display === 'none') {
            skills.style.display = 'block'; // Show skills section
        }
        else {
            skills.style.display = 'none'; // Hide skills section
        }
    });
}
else {
    console.error('One or both elements not found!');
}


