"use strict";

const formData = {
    nome: {
        element: document.querySelector("#inome"),
        elementValue: document.querySelector("#inome").value,
        errorMassage: null,
        errorMassage: ''
    },
    sobrenome: {
        element: document.querySelector("#"),
        elementValue: document.querySelector("#isobrenome").value,
        errorMassage: null,
        errorMassage: ''
    },
    senha: {
        element: document.querySelector("#isenha"),
        elementValue: document.querySelector("#isenha").value, 
        errorMassage: null,
        errorMassage: ''
    }, 
    email: {
        element: document.querySelector("#iemail"),
        elementValue: document.querySelector("#iemail").value,
        errorMassage: null,
        errorMassage: ''
    },
    hora: {
        element: document.querySelector("#ihora"),
        elementValue: document.querySelector("#ihora").value,
        errorMassage: null,
        errorMassage: ''
    }
}

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#inome");
    const nameValue = name.value;

    getElementDOM();

    if (!nameIsValid(nameValue).isValid) {
        errorSpanName.innerHTML = `${errorIcon} ${nameIsValid(nameValue).errorMassage}`;
    }

    const surname = document.querySelector("#isobrenome");
    const surnameValue = surname.value;

    getElementDOM();

    if (!surnameIsValid(surnameValue).isValid) {
        errorSpanSurname.innerHTML = `${errorIcon} ${surnameIsValid(surnameValue).errorMassage}`;
    }
})

// Função de pegar o elementos de erro
function getElementDOM (field) {
    const inputBox = field.element.closest(".input-box");
    const errorSpan = inputBox.querySelector(".error");
    return errorSpan;
}

// Função para mostrar o erro
function showError (fild, errorMassage) {
    fild.errorElement.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${errorMassage}`;
}

// Função para limpar

// Validação para ver se os dados são vazios
function isEmpty (value) {
    if (value === '') {
        return true;
    } else {
        return false;
    };
}

// Validação para o nome
function nameIsValid (value) {
    const validatorName = {
        isValid: true,
        errorMassage: null
    };

    if (isEmpty(value)) {
        validatorName.isValid = false;
        validatorName.errorMassage = 'O campo é obrigatório!';
        return validatorName;
    }

    // Validação se tem no mínimo 3 caracteres
    const minCaracter = 3;
    if(value.length < minCaracter) {
        validatorName.isValid = false;
        validatorName.errorMassage = `O campo deve ter no mínimo ${minCaracter} caracteres!`;
        return validatorName;
    }

    // Validação para ver se só contem letras
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value)) {
        validatorName.isValid = false;
        validatorName.errorMassage = `O campo deve conter apenas letras!`;
    }
    return validatorName;
}

// Validação para o Sobrenome
function surnameIsValid (value) {
    const validatorSurname = {
        isValid: true,
        errorMassage: null
    }

    if (isEmpty(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMassage = 'O campo é obrigatório!';
        return validatorSurname;
    }

    // Validação para no mínimo 3 caracteres
    const minCaracter = 3;
    if (value.length < minCaracter) {
        validatorSurname.isValid = false;
        validatorSurname.errorMassage = `O campo deve ter no mínimo ${minCaracter} caracteres!`;
        return validatorSurname;
    }

    // Validação para ver se só contem letras
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMassage = 'O campo deve conter apenas letras!';
    }

    return validatorSurname;
}

// Validação para senha
function passwordValid (value) {
    const password = document.querySelector("#isenha");
    const passwordValue = password.value;

    getElementDOM();

}