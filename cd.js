// Function to calculate remaining time until June 20, 2024
function calculateTimeRemaining() {
    const today = new Date();
    const targetDate = new Date("2024-06-20T18:12:00"); // Target date and time
    
    // Check if current time has reached or passed targetDate
    if (today >= targetDate) {
        displayAgeMessage();
    } else {
        // Calculate remaining time
        const timeDiff = targetDate.getTime() - today.getTime();
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Display countdown with animation or transition
        animateCountdown(days, hours, minutes, seconds);

        setTimeout(calculateTimeRemaining, 1000); // Update every second
    }
}

// Function to animate countdown display
function animateCountdown(days, hours, minutes, seconds) {
    animateValue("days", parseInt(document.getElementById("days").textContent), days, 1000);
    animateValue("hours", parseInt(document.getElementById("hours").textContent), hours, 1000);
    animateValue("minutes", parseInt(document.getElementById("minutes").textContent), minutes, 1000);
    animateValue("seconds", parseInt(document.getElementById("seconds").textContent), seconds, 1000);
}

// Function to animate numeric values
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        document.getElementById(id).textContent = current.toString().padStart(2, '0');
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Function to display age message and trigger blowing effect and confetti
function displayAgeMessage() {
    const ageMessageElement = document.getElementById("age-message");
    if (ageMessageElement) {
        ageMessageElement.style.display = "block";

        // Trigger confetti animation
        triggerConfetti();

        // Trigger blowing effect on Mario
        blowMario();

        // Play applause sound
        let audio = new Audio('yeayclap.mp3');
        audio.play(); // Start playing audio
    } else {
        console.error("Element with ID 'age-message' not found!");
    }
}

// Function to trigger confetti animation
function triggerConfetti() {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

// Function to simulate blowing animation on Mario
function blowMario() {
    const mario = document.getElementById('mario');
    if (mario) {
        mario.classList.add('blowing');
        setTimeout(() => {
            mario.classList.remove('blowing');
        }, 500);
    } else {
        console.error("Element with ID 'mario' not found!");
    }
}

// Start the countdown after the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    calculateTimeRemaining();

    // Handle button click with mouseover effect
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', () => {
            blowMario();
            // Activate confetti animation
            const myConfetti = confetti.create(document.getElementById('my-canvas'), {
                resize: true,
                useWorker: true,
            });
            myConfetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
            // Show age message
            displayAgeMessage();
        });

        // Mouseover effect on button
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });

        // Mouseout effect on button
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    } else {
        console.error("Button element not found!");
    }
});
