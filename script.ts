const toggle = document.getElementById('toggle-skills') as HTMLButtonElement | null;
const skill = document.getElementById('skills') as HTMLElement | null;

if (toggleButton && skill) {
  toggleButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the skills section
    skill.classList.toggle('hidden');
  });
} else {
  console.error('One or both elements not found!');
}
