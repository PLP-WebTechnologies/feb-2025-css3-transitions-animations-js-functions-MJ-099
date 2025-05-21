const btn = document.getElementById('animateBtn');

// Function to trigger animation and save state in localStorage
function triggerAnimation() {
  btn.classList.add('animate-pulse');
  localStorage.setItem('btnClicked', 'true');

  // Remove animation class after it ends to allow retriggering
  btn.addEventListener('animationend', () => {
    btn.classList.remove('animate-pulse');
  }, { once: true });
}

// Check localStorage on page load
window.onload = () => {
  const clicked = localStorage.getItem('btnClicked');

  if (clicked === 'true') {
    // Optionally, trigger animation on load or change button text
    btn.textContent = "You've clicked me!";
  }
};

// Add event listener to button
btn.addEventListener('click', () => {
  triggerAnimation();
  btn.textContent = "Clicked!";
});
