document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        if (navLinks.classList.contains("active")) {
            navLinks.style.display = "flex";
        } else {
            navLinks.style.display = "none";
        }
    });

    /* ================= EXPERIENCE TABS ================= */
    const tabs = document.querySelectorAll(".tab");
    const jobs = document.querySelectorAll(".job");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            jobs.forEach(job => job.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(tab.dataset.target).classList.add("active");
        });
    });

    /* ================= SCROLL REVEAL ================= */
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));

});
