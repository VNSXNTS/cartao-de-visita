// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Função para abrir links
    function abrirLink(url) {
        window.open(url, "_blank");
    }

    // Adiciona eventos aos botões
    document.querySelector(".instagram").addEventListener("click", function () {
        abrirLink("https://www.instagram.com/vet.amandarodrigues/");
    });

    document.querySelector(".whatsapp").addEventListener("click", function () {
        abrirLink("https://wa.me/5554996029926");
    });

    document.querySelector(".facebook").addEventListener("click", function () {
        abrirLink("https://www.facebook.com/profile.php?id=100004067584730");
    });

    document.querySelector(".linkedin").addEventListener("click", function () {
        abrirLink("https://www.linkedin.com/in/amanda-rodrigues");
    });

    document.querySelector(".email").addEventListener("click", function () {
        window.location.href = "mailto:seuemail@gmail.com";
    });

    // === Alternar entre modo claro e escuro ===
    const darkModeSwitch = document.getElementById("dark-mode-switch");
    const body = document.body;

    // Verifica se o modo escuro já foi ativado antes
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeSwitch.checked = true;
    }

    // Alterna o modo escuro ao clicar no switch
    darkModeSwitch.addEventListener("change", function () {
        if (darkModeSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
