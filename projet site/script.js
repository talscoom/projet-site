const buyButtons = document.querySelectorAll(".buy-now");
 
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const produto = button.dataset.product;
    const mensagem = `Olá! Quero comprar o plano ${produto}.`;
    const numero = "5511964290535";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

document.querySelectorAll(".animate-item").forEach((item) => {
  observer.observe(item);
 });