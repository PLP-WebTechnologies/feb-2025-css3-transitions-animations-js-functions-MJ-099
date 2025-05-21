const button = document.getElementById('colorButton');
const colorPicker = document.getElementById('colorPicker');

// Load stored color preference on page load
window.onload = () => {
  const savedColor = localStorage.getItem('favoriteColor');
  if (savedColor) {
    button.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

// Change button color and save preference
colorPicker.addEventListener('change', () => {
  const selectedColor = colorPicker.value;
  button.style.backgroundColor = selectedColor;
  localStorage.setItem('favoriteColor', selectedColor);
});

// Animate button on click
button.addEventListener('click', () => {
  button.classList.add('pulse');
  // Remove animation class after animation completes (500ms)
  setTimeout(() => button.classList.remove('pulse'), 500);
});
