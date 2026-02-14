const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});
// Counter Animation
const counters = document.querySelectorAll('.stat-number');

const startCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / 100;

    const update = () => {
        count += increment;
        if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };
    update();
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            startCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

counters.forEach(counter => observer.observe(counter));


// Kalkulator Estimasi
function hitungEstimasi(){
    const luas = document.getElementById("luas").value;
    const tipe = document.getElementById("tipe").value;

    if(!luas) return;

    let hargaPerM2 = 0;

    if(tipe === "sederhana") hargaPerM2 = 30000;
    if(tipe === "mewah") hargaPerM2 = 50000;
    if(tipe === "gedung") hargaPerM2 = 65000;

    const total = luas * hargaPerM2;

    document.getElementById("hasilEstimasi").innerText =
        "Estimasi Biaya: Rp " + total.toLocaleString("id-ID");
}
function kirimWA(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const wa = document.getElementById("wa").value;
    const pesan = document.getElementById("pesan").value;

    const nomorAdmin = "6285188642611"; // GANTI NOMOR ANDA

    const text = 
    "Halo, saya ingin konsultasi.%0A%0A" +
    "Nama: " + nama + "%0A" +
    "Email: " + email + "%0A" +
    "No WA: " + wa + "%0A" +
    "Pesan: " + pesan;

    window.open("https://wa.me/" + nomorAdmin + "?text=" + text, "_blank");
}

