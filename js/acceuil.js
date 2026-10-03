const objectifs = [
    {
        title: "Engagement Citoyen & Vivre-Ensemble",
        liste1: "Promouvoir la solidarité, la cohésion sociale et l’entraide au sein des communautés",
        liste2: "Favoriser la paix, le dialogue, la concertation et la gouvernance communautaire.",
        liste3: "Valoriser la culture, le patrimoine et les savoir-faire locaux comme leviers de développement.",
        img: "./assets/img/enfants2.jpg"
    },
    {
        title: "Développement Économique & Rural",
        liste1: "Renforcer l’autonomisation des femmes, des jeunes et des personnes vulnérables.",
        liste2: "Soutenir l’entrepreneuriat et le développement d’activités génératrices de revenus.",
        liste3: "Promouvoir une agriculture durable et garantir la sécurité alimentaire.",
        img: "./assets/img/agriculture.jpg"
    },
    {
        title: "Éducation, Santé & Inclusion",
        liste1: "Faciliter l’accès des populations à une éducation et une formation professionnelle de qualité.",
        liste2: "Améliorer l’accès aux soins de santé et renforcer la protection sociale.",
        liste3: "Promouvoir l’égalité et l’inclusion de toutes les personnes en situation de vulnérabilité.",
        img: "./assets/img/eleve.jpg"
    },
    {
        title: "Environnement & Changement Climatique",
        liste1: "Œuvrer activement à la protection et à la préservation de l’environnement.",
        liste2: "Assurer une gestion responsable et durable des ressources naturelles locales.",
        liste3: "Lutter concrètement contre les effets néfastes des changements climatiques.",
        img: "./assets/img/champs.jpg"
    },
    {
        title: "Partenariats & Ingénierie de Projet",
        liste1: "Développer des collaborations avec les institutions, les collectivités et les ONG.",
        liste2: "Mobiliser les ressources financières, matérielles, humaines et techniques nécessaires.",
        liste3: "Concevoir, mettre en œuvre et accompagner des projets communautaires d’impact.",
        img: "./assets/img/arrive_en_bateau.jpg"
    }
];

const objectifsGrid = document.querySelector('.objectifs-grid');
objectifsGrid.innerHTML = "";

objectifs.forEach((element) => {
    let container = ` 
    <div class="objectif-card">
        <img src="${element.img}" alt="${element.title}" class="objectif-card-img">
        <div class="objectif-card-content">
            <h4>${element.title}</h4>
            <ul class="objectif-sublist">
                <li>${element.liste1}</li>
                <li>${element.liste2}</li>
                <li>${element.liste3}</li>
            </ul>
        </div>
    </div>
    `;

    objectifsGrid.innerHTML += container;
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".objectif-card");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const grid = card.closest('.objectifs-grid');
                if (grid) {
                    const index = Array.from(grid.children).indexOf(card);
                    card.style.transitionDelay = `${index * 150}ms`;
                }

                card.classList.add("visible");
                observer.unobserve(card);
            }
        });
    }, observerOptions);

    cards.forEach((card) => {
        observer.observe(card);
    });
});
