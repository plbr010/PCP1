// Seleção dos elementos do modal
const modal = document.getElementById("info-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDetail = document.getElementById("modal-detail");
const modalTools = document.getElementById("modal-tools");
const closeModalButtons = document.querySelectorAll('.btn-close');

let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + testimonials.length) % testimonials.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

document.querySelectorAll('.pilar').forEach(function(pilar) {
    pilar.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        const detail = this.getAttribute('data-detail');
        const tools = this.getAttribute('data-tools');

        modalTitle.innerText = title;
        modalDescription.innerText = description;
        modalDetail.innerText = detail;
        modalTools.innerText = "Ferramentas Utilizadas: " + tools;

        modal.style.display = "block";
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = "none";
    });
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.querySelector('.carousel-controls .prev').addEventListener('click', function() {
    moveSlide(-1);
});

document.querySelector('.carousel-controls .next').addEventListener('click', function() {
    moveSlide(1);
});
