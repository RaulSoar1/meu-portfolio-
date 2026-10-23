
"use strict";

// 1. Saudação dinâmica
const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora < 12) {
    saudacao.textContent = "Bom dia! Seja bem-vindo(a).";
} else if (hora < 18) {
    saudacao.textContent = "Boa tarde! Seja bem-vindo(a).";
} else {
    saudacao.textContent = "Boa noite! Seja bem-vindo(a).";
}

// 2. Menu hambúrguer
const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
    botaoMenu.textContent = aberto ? "✕" : "☰";
});

// Fecha o menu após selecionar uma seção
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.textContent = "☰";
    });
});

// 3. Modo claro e escuro
const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
    const escuro = document.body.classList.toggle("escuro");

    botaoTema.textContent = escuro ? "☀️" : "🌙";
    botaoTema.setAttribute(
        "aria-label",
        escuro ? "Ativar modo claro" : "Ativar modo escuro"
    );
});

// 4. Ano automático no rodapé
document.getElementById("ano").textContent =
    new Date().getFullYear();

// 5. Validação do formulário
const formulario = document.getElementById("form-contato");
const statusForm = document.getElementById("status-form");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    statusForm.textContent =
        "Formulário validado! Este exemplo não envia mensagens ainda.";

    formulario.reset();
});
