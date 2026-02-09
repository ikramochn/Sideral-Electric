document.addEventListener('DOMContentLoaded', () => {
    
    // Navigation fluide
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Gestion simple du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci ! Votre demande a été envoyée à Sideral Electric Sétif. Nous vous recontacterons rapidement.');
            contactForm.reset();
        });
    }

    // Animation au défilement pour les cartes produits
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = '0.6s ease-out';
        observer.observe(card);
    });
});

// Assurez-vous que cette valeur correspond à la largeur de votre carte + le gap (300px + 24px)
const scrollAmount = 324; 

btnRight.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

btnLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


// Année dynamique
document.getElementById("year").textContent = new Date().getFullYear();

// Gestion du formulaire
const contactForm = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
        successMsg.style.display = 'block';
        contactForm.reset();
    }
});

// Bouton Scroll Top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}