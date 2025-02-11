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

    document.querySelector(".linkedin").addEventListener("click", function () {
        abrirLink("https://www.linkedin.com/in/amanda-da-silva-rodrigues-14a18329a/?otpToken=MTMwNzFmZTIxNTJjYzBjMmI1MmUwZmViNDExZGVlYjU4YWNjZDQ0NDk5YWM4NzZiN2JjZjAyNmU0ZTVjNThmYmY0ZGRkY2U5NzdlZGVhODU0ZmIwZWU5OTZjYWIxYzg5ZjhlNjE5ODc2OWZmOGJhOTZlYThjNDgxLDEsMQ%3D%3D&midSig=3vCzw6H38iiHE1&eid=k2105m-m6yegocf-uk&midToken=AQFNpTKOTptGNQ&trkEmail=eml-email_pymk_02-header-0-profile_glimmer-null-k2105m~m6yegocf~uk-null-null&trk=eml-email_pymk_02-header-0-profile_glimmer&originalSubdomain=br");
    });

    document.querySelector(".email").addEventListener("click", function () {
        window.location.href = "mailto:https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMhFljxGKZvBszQhtCLdVNMJjwFvMHrpdLKzjMqmMKMBszZvJGtdJlKVkJHzcrBxkFqZsSg";  // Substitua com o email correto
    });

    // Alternar entre modo claro e escuro
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
