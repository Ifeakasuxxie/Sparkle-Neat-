const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => { navbar.classList.toggle("scrolled", window.scrollY > 20); });
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => { navLinks.classList.toggle("open"); });
navLinks.querySelectorAll("a").forEach(l => l.addEventListener("click", () => navLinks.classList.remove("open")));

const form = document.getElementById("quoteForm");
form.addEventListener("submit", function (e) {
    let valid = true;
    const checks = [
        { fg: "fg-name", el: "fname", ok: v => v.trim().length >= 2 },
        { fg: "fg-phone", el: "fphone", ok: v => /^[0-9\s\+\-]{7,16}$/.test(v.trim()) },
        { fg: "fg-service", el: "fservice", ok: v => v !== "" },
    ];
    checks.forEach(c => {
        const fg = document.getElementById(c.fg);
        const val = document.getElementById(c.el).value;
        if (!c.ok(val)) { fg.classList.add("invalid"); valid = false; }
        else { fg.classList.remove("invalid"); }
    });
    if (!valid) {
        e.preventDefault();
    } else {
        const btn = document.getElementById("submitBtn");
        btn.textContent = "Sending…";
        btn.disabled = true;
    }
});
document.querySelectorAll(".form-group input, .form-group select").forEach(el => {
    el.addEventListener("input", () => el.closest(".form-group").classList.remove("invalid"));
});