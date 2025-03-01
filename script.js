"use strict";

const form = document.querySelector("#form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede do formulário ser enviado automaticamente

    let formIsValiD = true;
    const iconError = '<i class="fa-solid fa-circle-exclamation"></i>';

    // Nome
    const nome = document.querySelector("#inome");
    const nomeValue = nome.value;
    
    const inputBoxName = nome.closest(".input-box");
    const errorSpanName = inputBoxName.querySelector(".error");

    const nameValidation = isValidName(nomeValue);
    if (!nameValidation.isValid) {
        formIsValiD = false;
        errorSpanName.innerHTML = `${iconError} ${nameValidation.errorMessage}`;
    };

    // Sobrenome
    const surname = document.querySelector("#isobrenome");
    const surnameValue = surname.value;

    const inputBoxSurname = surname.closest(".input-box");
    const errorSpanSurname = inputBoxSurname.querySelector(".error");

    const surnameValidation = isValidSurname(surnameValue);
    if (!surnameValidation.isValid) {
        formIsValiD = false;
        errorSpanSurname.innerHTML = `${iconError} ${surnameValidation.errorMessage}`;
    };

    // Senha
    const password = document.querySelector("#isenha");
    const passwordValue = password.value;

    const inputBoxPassword = password.closest(".input-box");
    const errorSpanPassword = inputBoxPassword.querySelector(".error");

    const passwordValidation = isValidPassword(passwordValue);
    if (!passwordValidation.isValid) {
        formIsValiD = false;
        errorSpanPassword.innerHTML = `${iconError} ${passwordValidation.errorMessage}`;
    };

    // Formulário
    if (formIsValiD) {
        form.submit();
    };

});

// Função para ver se o valor é vazio
function isEmpty (value) {
    return value === ''; // Se o valor for vazio, ele retorna 'TRUE'
};

// Função para expressões regulares
function expressoesRegulares () {
    return {
        apenasLetras: /^[a-zA-Z]+$/,
        senha: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,


    };
};

// Função para validar o nome e sobrenome
function isValidName (value) {
    const validatorName = {
        isValid: true,
        errorMessage: null
    };

    // Mensagem caso o campo esteja vazio
    if (isEmpty(value)) {
        validatorName.isValid = false;
        validatorName.errorMessage = 'O campo esta vazio!';
        return validatorName;
    };

    // Mensagem caso o campo tenha menos de 3 caracteres
    const min = 3;
    if (value.length < min) {
        validatorName.isValid = false;
        validatorName.errorMessage = `O campo tem menos de ${min} caracteres!`;
        return validatorName;
    };

    // Mensagem caso o campo contenha números
    if (!(expressoesRegulares().apenasLetras).test(value)) {
        validatorName.isValid = false;
        validatorName.errorMessage = `Digite apenas letras!`;
        return validatorName;
    };
    return validatorName;
};

// Função para validar o sobrenome
function isValidSurname (value) {
    const validatorSurname = {
        isValid: true,
        errorMessage: null
    };

    // Função para o campo vazio
    if (isEmpty(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O campo está vazio!`;
        return validatorSurname;
    };

    // Função para ver o mínimo de caracteres
    const min = 3;
    if (value.length < min) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O mínimo de caracteres é ${min}!`;
        return validatorSurname; 
    };

    // Função para ver se contem números
    if (!(expressoesRegulares().apenasLetras).test(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O campo contém números!`;
        return validatorSurname;
    };
    return validatorSurname;
};

// Função para validar a senha
function isValidPassword (value) {
    const validatorPassword = {
        isValidPassword: true,
        errorMessage: null
    };

    // Caso esteje vazio
    if (isEmpty(value)) {
        validatorPassword.isValidPassword = false;
        validatorPassword.errorMessage = `O campo esta vazio!`;
        return validatorPassword;
    };

    // Caso tenha menos de 6 caracteres
    const min = 8;
    if (value.length < min) {
        validatorPassword.isValidPassword = false;
        validatorPassword.errorMessage = 'O campo possui menos de 6 caracteres!';
        return validatorPassword;
    };

    // Validação para senha: 1 caracter minúsculo, 1 caracter maiusculo, 1 numero, e pelo menos 1 caracter especial (@, #, !, $, %), não pode conter espaços em branco
    if (!(expressoesRegulares().senha).test(value)) {
        validatorPassword.isValidPassword = false;
        validatorPassword.errorMessage = `A senha deve conter pelo menos 1 caractere minúsculo, maiúsculo, especial e não deve conter espaços em branco!`
        return validatorPassword;
    };
    return validatorPassword;
}

// Função para validar email
function isValidEmail (value) {
    const regex = /^([a-zA-Z0-9._%+-]{2,})(@)([a-zA-Z0-9.-]{2,})(\.)([a-zA-Z]{2,})(\.)([a-z]{2,})?$/;
}

// Função para validar números de telefone
function isValidPhone (value) {
    const regex = /\([0-9]{2}\)\s([0-9]{4,5})\-([0-9]{4})/g;
}