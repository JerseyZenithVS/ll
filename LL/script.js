function openWindow() {
    // Animate the curtain to open
    document.getElementById('curtain').style.transform = 'translateY(-100%)';
  
    // Delay showing the letter content to match the curtain animation
    setTimeout(() => {
      document.getElementById('window').style.display = 'none';
      document.getElementById('letter-content').style.display = 'block';
    }, 1000); // Match the curtain animation duration
  }
  const affirmations = [
    "I Love You",
    "You're the one I Want",
    "Mwaaa",
    "Hi Babagrel",
    "R u reading dis?",
    "Do u like it?",
    "I love you always!",
    "Nyomnyoms",
    "Ur so gorgeous",
    "Ur so beautiful"
  ];
  
  function createFloatingCircle() {
    const circle = document.createElement('div');
    circle.classList.add('floating-circle');
    const text = document.createElement('p');
    text.textContent = affirmations[Math.floor(Math.random() * affirmations.length)];
    circle.appendChild(text);
  
    // Position the circle randomly
    circle.style.top = `${Math.random() * 100}%`;
    circle.style.left = `${Math.random() * 100}%`;
  
    // Append to the container
    document.getElementById('floating-circles-container').appendChild(circle);
  
    // Remove circle after animation ends (5 seconds)
    setTimeout(() => {
      circle.remove();
    }, 5000); // Matches the animation duration
  }
  
  // Create a floating circle every 3 seconds
  setInterval(createFloatingCircle, 3000);
  
  // Pop the circle when clicked
  document.getElementById('floating-circles-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('floating-circle')) {
      event.target.remove(); // Remove the circle when clicked
    }
  });
  