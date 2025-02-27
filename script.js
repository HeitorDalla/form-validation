"use strict";

const form = document.querySelector("#form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede do formulário ser enviado automaticamente

    // Pegar nome
    const nome = document.querySelector("#inome");
    const nomeValue = nome.value;

    // Pegar o local para mostrar o erro
    const inputBox = nome.closest("#input-box");
    const errorSpan = inputBox.querySelector(".error");

    // Ícone de erro
    const iconError = // Colocar icone de erro

    // Pegar senha
    const password = document.querySelector("#isenha");
    const passwordValue = password.value;



})

// Função para ver se o valor é vazio
function isEmpty (value) {
    return value === ''; // Se o valor for vazio, ele retorna 'TRUE'
}

// Função para validar o nome e sobrenome
function IsValidName (value) {
    const validatorName = {
        isValid: true,
        errorMassage: null
    };

    // Mensagem caso o campo esteja vazio
    if (isEmpty(value)) {
        validatorName.isValid = false;
        validatorName.errorMassage = 'O campo esta vazio! Por favor escreva algo!';
        return validatorName;
    }

    // Mensagem caso o campo tenha menos de 3 caracteres
    const mim = 3;
    if (value.length < min) {
        validatorName.isValid = false;
        validatorName.errorMassage = `O campo tem menos de ${min} caracteres!`;
        return validatorName;
    }

    // Mensagem caso o campo contenha números
    const regex = '' // Expressao regex
    if (!regex.test(value)) { // Caso passe pelo teste, retorna 'TRUE'
        validatorName.isValid = false;
        validatorName.errorMassage = `Digite apenas letras!`;
        return validatorName;
    }
    return validatorName;
};

// Função para validar o sobrenome
function isValidSurname (value) {
    const validatorSurname = {
        isValid: true,
        errorMassage: null
    }

    // Função para o campo vazio
    if (!isEmpty(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMassage = `O campo está vazio! Escreva!`;
        return validatorSurname;
    }

    // Função para ver o mínimo de caracteres
    const min = 3;
    if (value.length < min) {
        validatorSurname.isValid = false;
        validatorSurname.errorMassage = `O mínimo de caracteres é ${min}!`;
        return validatorSurname; 
    }

    // Função para ver se contem números
    const regex = '' // Expressao regex
    if (!regex.test(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMassage = `O campo contém números!`;
        return validatorSurname;
    }
};

// Função para validar a senha
function isValidPassword (value) {
    
}