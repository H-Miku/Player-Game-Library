

document.addEventListener("DOMContentLoaded", () => {
    const purchaseButton = document.getElementById("purchase-btn");
    purchaseButton.addEventListener("click", () => {
        alert("Purchase button clicked!");
    });

    // Dropdown functionality
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "block";
        });
        dropdown.addEventListener("mouseleave", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "none";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Select the elements to update
    const galleryItems = document.querySelectorAll(".gallery .game");
    const mostPlayedItems = document.querySelectorAll(".most-played .game"); // For Most Played section
    const heroTitle = document.querySelector(".hero-content h1");
    const heroDesc = document.querySelector(".hero-content p");
    const heroSection = document.querySelector(".hero");

    // Function to return descriptions for each game
    function getGameDescription(game) {
        const descriptions = {
            "Elden Ring": "An epic adventure awaits in the Lands Between.",
            "Monster Hunter Rise": "Hunt fearsome monsters in an immersive world.",
            "Sekiro: Shadows Die Twice": "A brutal samurai action experience.",
            "Dark Souls 3": "A dark and punishing action RPG adventure.",
            "Minecraft": "A sandbox game where you can build, explore, and survive.",
            "Terraria": "An adventure game with crafting, exploration, and combat.",
            "Wuthering Waves": "An immersive RPG that takes you on an epic journey.",
            "Helldivers 2": "A cooperative twin-stick shooter with intense action."
        };
        return descriptions[game] || "A fantastic game to explore!";
    }

    // Function to handle the image click and update the hero section
    function updateHeroSection(item) {
        // Get the game title and description
        const gameTitle = item.querySelector("p").textContent;
        const gameDescription = getGameDescription(gameTitle);

        // Get the background image URL from data-img attribute
        const newImg = item.getAttribute("data-img");

        // Update the hero section text
        heroTitle.textContent = gameTitle;
        heroDesc.textContent = gameDescription;

        // Update the hero section background image
        heroSection.style.backgroundImage = `url('${newImg}')`;
        heroSection.style.transition = "background 0.5s ease-in-out"; // Smooth transition for background
    }

    // Add click event to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            updateHeroSection(item); // Call the function to update hero section
        });
    });

    // Add click event to each most played item
    mostPlayedItems.forEach(item => {
        item.addEventListener("click", () => {
            updateHeroSection(item); // Call the function to update hero section
        });
    });
});

document.getElementById("purchase-btn").addEventListener("click", function() {
    window.location.href = "dota.html"; // Replace with your target HTML file
});






