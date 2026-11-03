const btn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => menu.classList.remove("open"))
);

document.getElementById("year").textContent = new Date().getFullYear();

const targets = document.querySelectorAll(".card, .post, .tile, .prose, .form");
targets.forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
targets.forEach((el) => io.observe(el));
