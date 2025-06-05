document.addEventListener("DOMContentLoaded", function () {
    // Adiciona interação ao menu de navegação
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    // Adiciona um alerta ao enviar sugestão de receita
    const textarea = document.getElementById("sugestao");
    const footer = document.querySelector("footer");
    
    textarea.addEventListener("keyup", function () {
        if (textarea.value.length > 100) {
            alert("Sua sugestão está muito longa! Tente reduzir um pouco.");
        }
    });
    
    // Efeito de rolagem suave para os links do menu
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
