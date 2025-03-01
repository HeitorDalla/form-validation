"use strict";

const form = document.querySelector("#form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Impede do formulário ser enviado automaticamente

    let formIsValiD = true;

    // Nome
    const nome = document.querySelector("#inome");
    const nomeValue = nome.value;
    
    const inputBoxName = nome.closest(".input-box");
    const errorSpanName = inputBoxName.querySelector(".error");

    const iconError = '<i class="fa-solid fa-circle-exclamation"></i>';

    const nameValidation = isValidName(nomeValue);
    if (!nameValidation.isValid) { // Se ele não for válido
        formIsValiD = false;
        errorSpanName.innerHTML = `${iconError} ${nameValidation.errorMessage}`;
    };

    // Sobrenome
    const surname = document.querySelector("#isobrenome");
    const surnameValue = surname.value;

    const inputBoxSurname = surname.closest(".input-box");
    const errorSpanSurname = inputBoxSurname.querySelector(".error");

    const surnameValidation = isValidSurname(surnameValue);
    formIsValiD = false;
    if (!surnameValidation.isValid) {
        errorSpanSurname.innerHTML = `${iconError} ${surnameValidation.errorMessage}`;
    };

    // Formulário
    if (formIsValiD) {
        form.submit();
    }

});

// Função para ver se o valor é vazio
function isEmpty (value) {
    return value === ''; // Se o valor for vazio, ele retorna 'TRUE'
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
        validatorName.errorMessage = 'O campo esta vazio! Por favor escreva algo!';
        return validatorName;
    }

    // Mensagem caso o campo tenha menos de 3 caracteres
    const min = 3;
    if (value.length < min) {
        validatorName.isValid = false;
        validatorName.errorMessage = `O campo tem menos de ${min} caracteres!`;
        return validatorName;
    }

    // Mensagem caso o campo contenha números
    const regex = '' // Expressao regex
    if (!regex.test(value)) { // Caso passe pelo teste, retorna 'TRUE'
        validatorName.isValid = false;
        validatorName.errorMessage = `Digite apenas letras!`;
        return validatorName;
    }
    return validatorName;
};

// Função para validar o sobrenome
function isValidSurname (value) {
    const validatorSurname = {
        isValid: true,
        errorMessage: null
    }

    // Função para o campo vazio
    if (isEmpty(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O campo está vazio! Escreva!`;
        return validatorSurname;
    }

    // Função para ver o mínimo de caracteres
    const min = 3;
    if (value.length < min) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O mínimo de caracteres é ${min}!`;
        return validatorSurname; 
    }

    // Função para ver se contem números
    const regex = '' // Expressao regex
    if (!regex.test(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O campo contém números!`;
        return validatorSurname;
    }
};

// Função para validar a senha
function isValidPassword (value) {
    
}