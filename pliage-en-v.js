document.addEventListener("DOMContentLoaded", () => {
    // Apparition au défilement (même comportement que la page principale)
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add("active"); io.unobserve(e.target); }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    // Visionneuse d'images
    const imgs = [...document.querySelectorAll("img[data-zoom]")];
    const lb = document.getElementById("pv-lightbox");
    const big = lb.querySelector("img");
    let i = 0, opener = null;

    const show = (n) => { i = (n + imgs.length) % imgs.length; big.src = imgs[i].src; big.alt = imgs[i].alt; };
    const open = (n) => { opener = document.activeElement; show(n); lb.hidden = false; document.body.style.overflow = "hidden"; lb.querySelector(".pv-lb-close").focus(); };
    const close = () => { lb.hidden = true; document.body.style.overflow = ""; if (opener) opener.focus(); };

    imgs.forEach((im, n) => {
        im.tabIndex = 0;
        im.setAttribute("role", "button");
        im.addEventListener("click", () => open(n));
        im.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(n); } });
    });
    lb.querySelector(".pv-lb-close").addEventListener("click", close);
    lb.querySelector(".pv-lb-prev").addEventListener("click", () => show(i - 1));
    lb.querySelector(".pv-lb-next").addEventListener("click", () => show(i + 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
        if (lb.hidden) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(i - 1);
        if (e.key === "ArrowRight") show(i + 1);
    });
});
