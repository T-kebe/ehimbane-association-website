const navbar = `
    <div class="header-container">
        <a href="acceuil.html" class="logo">
            <img src="assets/logo/logo-eid.jpg" alt="Logo EHIMBANE" class="logo-img">
            <div class="logo-text-container">
                <span class="logo-text">EHIMBANE</span>
                <span class="logo-sub">Initiatives & Développement</span>
            </div>
        </a>

        <button class="mobile-menu-toggle" aria-label="Ouvrir le menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>

        <nav class="main-navigation">
            <ul class="nav-list">
                <li><a href="acceuil.html" class="nav-link active">Accueil</a></li>
                <li><a href="association.html" class="nav-link">L'Association</a></li>
                <li><a href="soutenir.html" class="nav-link">Nous Soutenir</a></li>
                <li><a href="contact.html" class="nav-link nav-btn">Contact</a></li>
            </ul>
        </nav>
    </div>

    
    `
const header = document.querySelector('.main-header');
header.innerHTML = navbar;

const currentPath = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
    
    if (currentPath === "" && link.getAttribute("href") === "acceuil.html") {
        link.classList.add("active");
    }
});


const menuToggle = document.querySelector(".mobile-menu-toggle");
const navigation = document.querySelector(".main-navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        navigation.classList.toggle("mobile-open");
        menuToggle.classList.toggle("active");

        if (navigation.classList.contains("mobile-open")) {
            menuToggle.innerHTML = `<img src="assets/logo/croix.png" alt="Fermer" style="width: 30px; height: 30px;">`;
        } else {
            menuToggle.innerHTML = `
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            `;
        }
    });
}
