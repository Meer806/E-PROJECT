document.addEventListener("DOMContentLoaded", function () {
    const planets = document.querySelectorAll(".planet");

    planets.forEach(planet => {
        planet.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 0px 30px rgba(255, 255, 255, 0.8)";
            this.style.transform = "scale(1.1)";
            this.style.transition = "all 0.3s ease";
        });

        planet.addEventListener("mouseout", function () {
            this.style.boxShadow = "none";
            this.style.transform = "scale(1)";
        });
    });

    // Add a simple click interaction
    planets.forEach(planet => {
        planet.addEventListener("click", function () {
            alert(`You clicked on ${this.querySelector("h2").textContent}!`);
        });
    });
});

// about us page script

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        document.getElementById('response').innerHTML = '<p class="text-danger">All fields are required.</p>';
        return;
    }

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();
        document.getElementById('response').innerHTML = <p class="text-success">${result.message}</p>;
        document.getElementById('contactForm').reset();
    } catch (error) {
        document.getElementById('response').innerHTML = '<p class="text-danger">Submission failed. Try again.</p>';
    }
});

