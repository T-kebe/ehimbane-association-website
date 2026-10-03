
const galerie = [
    { img: "./assets/Galerie/IMG-20260930-WA0035.jpg" },
    { img: "./assets/Galerie/IMG-20260930-WA0037.jpg" },
    { img: "./assets/Galerie/IMG-20260930-WA0039.jpg" },
    { img: "./assets/Galerie/IMG-20260930-WA0040.jpg" },
    { img: "./assets/Galerie/IMG-20260930-WA0036.jpg" },
    { img: "./assets/img/agriculture.jpg" }
];

let contenu = document.querySelector(".ehimbane-assoc-gallery-wrapper");
contenu.innerHTML = '';

galerie.forEach(element => {
    let contenuGalerie = `
        <div class="ehimbane-assoc-photo-box">
            <img src="${element.img}" alt="Réalité du terroir">
            <div class="ehimbane-assoc-photo-label">Réalités de terrain</div>
        </div>
    `
    contenu.innerHTML += contenuGalerie;
});



document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("ehimbane-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");

    const galleryItems = document.querySelectorAll(".ehimbane-assoc-gallery-wrapper, .ehimbane-assoc-card img");

    galleryItems.forEach(item => {
        item.style.cursor = "zoom-in";

        item.addEventListener("click", (e) => {
            let imgSrc = "";
            if (e.target.tagName === "IMG") {
                imgSrc = e.target.src;
            } else {
                const bg = window.getComputedStyle(e.target).backgroundImage;
                imgSrc = bg.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            }

            if (imgSrc && imgSrc !== "none") {
                lightboxImg.src = imgSrc;
                lightbox.classList.add("active");
                document.body.style.overflow = "hidden"; 
            }
        });
    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto"; 
    }
});
