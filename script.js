function showPortfolio(category, element){

    const portfolio = document.getElementById("portfolio-content");

    // Hapus active button lama
    document.querySelectorAll(".skill-btn").forEach(button => {
        button.classList.remove("active");
    });

    // Tambahkan active button
    element.classList.add("active");

    // ================= CANVA =================
    if(category === "canva"){

        portfolio.innerHTML = `
        <div class="portfolio-card">
            <img src="images/project7.jpg" alt="Canva Design">

            <div class="portfolio-info">
                <h3>Canva Design</h3>
                <p>Desain poster dan media sosial menggunakan Canva.</p>
            </div>
        </div>
        `;
    }

    else if(category === "html"){

        portfolio.innerHTML = `
        <div class="portfolio-card">
            <img src="images/project6.jpg" alt="HTML Project">

            <div class="portfolio-info">
                <h3>HTML Project</h3>
                <p>Pembuatan struktur website menggunakan HTML.</p>
            </div>
        </div>
        `;
    }

    else if(category === "css"){

        portfolio.innerHTML = `
        <div class="portfolio-card">
            <img src="images/project9.jpg" alt="CSS Styling">

            <div class="portfolio-info">
                <h3>CSS Styling</h3>
                <p>Mendesain tampilan website menggunakan CSS.</p>
            </div>
        </div>
        `;
    }

    else if(category === "video"){

        portfolio.innerHTML = `
        <div class="portfolio-card">
            <img src="images/project1.jpg" alt="Video Editing">

            <div class="portfolio-info">
                <h3>Video Editing</h3>
                <p>Project editing video sederhana untuk tugas akademik.</p>
            </div>
        </div>
        `;
    }

    else if(category === "microsoft office"){

        portfolio.innerHTML = `
        <div class="portfolio-card">
            <img src="images/project11.jpg" alt="Microsoft Office">

            <div class="portfolio-info">
                <h3>Microsoft Office</h3>
                <p>Penggunaan Word, Excel, dan PowerPoint.</p>
            </div>
        </div>
        `;
    }

    else if(category === "teamwork"){

        portfolio.innerHTML = `
        <div class="portfolio-card">
            <img src="images/project12.jpg" alt="Teamwork">

            <div class="portfolio-info">
                <h3>Teamwork</h3>
                <p>Mampu bekerja sama dalam tim dengan baik.</p>
            </div>
        </div>
        `;
    }
}

// ================= LIGHTBOX =================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Klik gambar portfolio
document.addEventListener("click", function(e){

    if(e.target.matches(".portfolio-card img")){

        lightbox.style.display = "flex";

        lightboxImg.src = e.target.src;
    }

});

// Tutup lightbox
lightbox.addEventListener("click", function(){

    lightbox.style.display = "none";

});
function downloadCV(){

    // ================= DATA UTAMA =================

    const name =
    document.querySelector(".home-text h1 span").innerText;

    const tagline =
    document.querySelector(".home-text p").innerText;

    const about =
    document.querySelector(".about p").innerText;

    const profileImage =
    document.querySelector(".image-frame img").src;

    // ================= CONTACT =================

    const contacts =
    document.querySelectorAll(".contact-card p");

    const email = contacts[0].innerText;
    const instagram = contacts[1].innerText;
    const whatsapp = contacts[2].innerText;

    // ================= EDUCATION =================

    const educationCards =
    document.querySelectorAll("#education .info-card");

    let educationHTML = "";

    educationCards.forEach(card => {

        const title =
        card.querySelector("h3").innerText;

        const desc =
        card.querySelector("p").innerText;

        educationHTML += `
            <div class="cv-item">
                <h3>${title}</h3>
                <p>${desc}</p>
            </div>
        `;
    });

    // ================= CAREER =================

    const careerCards =
    document.querySelectorAll("#career .info-card");

    let careerHTML = "";

    careerCards.forEach(card => {

        const title =
        card.querySelector("h3").innerText;

        const desc =
        card.querySelector("p").innerText;

        careerHTML += `
            <div class="cv-item">
                <h3>${title}</h3>
                <p>${desc}</p>
            </div>
        `;
    });

    // ================= SKILLS =================

    let skillsHTML = "";

    document.querySelectorAll(".skill-btn").forEach(skill => {

        skillsHTML += `
            <li>${skill.innerText}</li>
        `;
    });

    // ================= TEMPLATE CV =================

    const cv = `
    <div class="cv-container">

        <div class="cv-top">

            <img src="${profileImage}" class="cv-photo">

            <div class="cv-head">

                <h1>${name}</h1>

                <h3>${tagline}</h3>

                <div class="cv-contact">

                    <span>${email}</span>
                    <span>${whatsapp}</span>
                    <span>${instagram}</span>

                </div>

            </div>

        </div>

        <!-- SUMMARY -->

        <div class="cv-section">

            <h2>Professional Summary</h2>

            <p>${about}</p>

        </div>

        <!-- EDUCATION -->

        <div class="cv-section">

            <h2>Education Background</h2>

            ${educationHTML}

        </div>

        <!-- CAREER -->

        <div class="cv-section">

            <h2>Career Goals</h2>

            ${careerHTML}

        </div>

        <!-- SKILLS -->

        <div class="cv-section">

            <h2>Skills</h2>

            <ul class="cv-list">

                ${skillsHTML}

            </ul>

        </div>

    </div>
    `;

    // ================= MASUKKAN CV =================

    const cvTemplate =
    document.getElementById("cv-template");

    cvTemplate.innerHTML = cv;

    cvTemplate.style.display = "block";

    // ================= PDF =================

    const opt = {

        margin: 0,

        filename: 'Defa-CV.pdf',

        image: {
            type: 'jpeg',
            quality: 1
        },

        html2canvas: {
            scale: 3,
            useCORS: true
        },

        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    setTimeout(() => {

        html2pdf()
        .set(opt)
        .from(cvTemplate)
        .save()
        .then(() => {

            cvTemplate.style.display = "none";

        });

    }, 500);

}