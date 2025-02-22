document.addEventListener("DOMContentLoaded", () => {
    const purchaseButton = document.getElementById("purchase-btn");
    if (purchaseButton) {
        purchaseButton.addEventListener("click", () => {
            window.location.href = "dota.html"; // Redirect to your target page
        });
    }

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

    // Select the elements to update
    const galleryItems = document.querySelectorAll(".gallery .game");
    const mostPlayedItems = document.querySelectorAll(".most-played .game"); // For Most Played section
    const heroTitle = document.querySelector(".hero-content h1");
    const heroDesc = document.querySelector(".hero-content p");
    const heroSection = document.querySelector(".hero");

    // Function to return descriptions for each game
    function getGameDescription(game) {
    const descriptions = {
            "Dark Souls III": "A punishing action RPG set in a dark, decaying world filled with deadly enemies, epic boss fights, and deep lore.",
            "Elden Ring": "An open-world adventure where you explore vast lands, battle powerful foes, and uncover the secrets of the Elden Ring.",
            "Sekiro: Shadows Die Twice": "A fast-paced samurai action game that tests your precision, reflexes, and mastery of the blade in feudal Japan.",
            "Monster Hunter Rise": "Hunt massive creatures, craft powerful gear, and use acrobatic moves to track and take down ferocious monsters.",
            "DOTA 2": "A deep and strategic multiplayer battle where two teams of five compete in an ever-evolving war of skill and teamwork.",
            "Call Of Duty: Modern Warfare II": "A fast-paced FPS with intense campaigns, tactical multiplayer action, and heart-pounding gunfights.",
            "Lies Of P": "A dark, twisted take on Pinocchio with soulslike combat, brutal enemies, and a gripping story of deception and revenge.",
            "Minecraft": "An open-ended sandbox where you build, explore, and survive in a limitless, blocky world of creativity and adventure.",
            "Terraria": "A side-scrolling adventure with crafting, building, and intense combat against unique monsters and powerful bosses.",
            "Wuthering Waves": "A visually stunning RPG that blends fluid combat, an expansive world, and deep storytelling in a breathtaking setting.",
            "Helldivers 2": "A chaotic, cooperative shooter where teamwork is key as you take on hordes of enemies in high-stakes combat.",
            "Battlefield 2042": "Massive-scale warfare with dynamic battlegrounds, advanced weapons, and explosive, team-based combat."
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

const sliders = [document.querySelector(".gallery"), document.querySelector(".most-played")];
const images = document.querySelectorAll(".gallery .game img, .most-played .game img");

let isDown = false;
let startX;
let scrollLeft;

sliders.forEach(slider => {
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        e.preventDefault();
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
        applyParallax();
    });

    // Touch Support
    slider.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", () => {
        isDown = false;
    });

    slider.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
        applyParallax();
    });
});

// Apply 3D Parallax Effect to Images
function applyParallax() {
    const scrollPosition = sliders[0].scrollLeft; // Take one slider as reference
    images.forEach((img) => {
        const moveAmount = (scrollPosition / sliders[0].scrollWidth) * 50;
        img.style.transform = `translateX(${moveAmount}px) scale(1.1)`;
    });
}

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});


window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    
    // Adjust background position based on scroll position
    document.querySelector(".hero").style.backgroundPositionY = `${-scrollPosition * 0.5}px`;
    document.querySelector(".highlight-section").style.backgroundPositionY = `${-scrollPosition * 0.3 }px`;
});
let lastScrollY = 0;
function parallaxEffect() {
    let scrollPosition = window.scrollY;
    
    document.querySelector(".hero").style.backgroundPositionY = `${-scrollPosition * 0.5 }px`;
    document.querySelector(".highlight-section").style.backgroundPositionY = `${-scrollPosition * 0.3}px`;

    lastScrollY = scrollPosition;
    requestAnimationFrame(parallaxEffect);
}

parallaxEffect();
