function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector(".icon");

    // Alterna o tema
    body.classList.toggle("dark-theme");

    // Salva no localStorage
    const isDark = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Atualiza ícone
    icon.textContent = isDark ? "☀️" : "🌙";

    // Animação
    icon.classList.add("rotate");
    setTimeout(() => {
        icon.classList.remove("rotate");
    }, 300);
}

/* Atualiza ícone sozinho */
function updateIcon() {
    const icon = document.querySelector(".icon");

    if (!icon) return; // evita erro em páginas sem botão

    const isDark = document.body.classList.contains("dark-theme");
    icon.textContent = isDark ? "☀️" : "🌙";
}

/* Mantém o tema ao trocar de página */
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    updateIcon();
};

/* Cadastro */
function criarConta() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (!user || !pass || !confirm) {
        alert("Preencha todos os campos!");
        return;
    }

    if (pass !== confirm) {
        alert("As senhas não coincidem!");
        return;
    }

    localStorage.setItem("usuario", user);
    localStorage.setItem("senha", pass);

    alert("Conta criada com sucesso!");
    window.location.href = "index.html";
}

/* Login */
function login() {
    const user = document.querySelector("input[type='text']").value;
    const pass = document.querySelector("input[type='password']").value;

    const savedUser = localStorage.getItem("usuario");
    const savedPass = localStorage.getItem("senha");

    if (user === savedUser && pass === savedPass) {
        alert("Login realizado!");
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function toggleMenu() {
    const nav = document.querySelector(".header nav");
    const toggle = document.querySelector(".menu-toggle");

    nav.classList.toggle("active");
    toggle.classList.toggle("active");
}