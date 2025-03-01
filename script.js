"use strict";

const form = document.querySelector("#form");

// Evento para adicionar o botão de enviar
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

    // Email
    const email = document.querySelector("#iemail");
    const emailValue = email.value

    const inputBoxEmail = email.closest(".input-box");
    const errorSpanEmail = inputBoxEmail.querySelector(".error");

    const emailValidation = isValidEmail(emailValue);
    if (!emailValidation.isValid) {
        formIsValiD = false;
        errorSpanEmail.innerHTML = `${iconError} ${emailValidation.errorMessage}`;
    };

    // Telefone
    const telephone = document.querySelector("#itel");
    const telephoneValue = telephone.value;

    const inputBoxTelephone = telephone.closest(".input-box");
    const errorSpanTelephone = inputBoxTelephone.querySelector(".error");

    const telephoneValidation = isValidTelephone(telephoneValue);
    if (!telephoneValidation.isValid) {
        formIsValiD = false;
        errorSpanTelephone.innerHTML = `${iconError} ${telephoneValidation.errorMessage}`;
    };

    // Data
    const date = document.querySelector("#idata");
    const dateValue = date.value;

    const inputBoxDate = date.closest(".input-box");
    const errorSpanDate = inputBoxDate.querySelector(".error");

    const dateValidation = isValidDate(dateValue);
    if (!dateValidation.isValid) {
        formIsValiD = false;
        errorSpanDate.innerHTML = `${iconError} ${dateValidation.errorMessage}`
    };

    // Senha
    const password = document.querySelector("#isenha");
    let passwordValue = password.value;

    const inputBoxPassword = password.closest(".input-box");
    const errorSpanPassword = inputBoxPassword.querySelector(".error");

    const passwordValidation = isValidPassword(passwordValue);
    if (!passwordValidation.isValid) {
        formIsValiD = false;
        errorSpanPassword.innerHTML = `${iconError} ${passwordValidation.errorMessage}`;
    };

    // Confirmar senha
    const passwordMatch = document.querySelector("#isenhaConfirmar")
    const passwordMatchValue = passwordMatch.value

    const inputBoxPasswordMatch = passwordMatch.closest(".input-box");
    const errorSpanPasswordMatch = inputBoxPasswordMatch.querySelector(".error");

    const passwordMatchValidation = passwordConfirm(passwordValue, passwordMatchValue);
    if (!passwordMatchValidation.isValid) {
        formIsValiD = false;
        errorSpanPasswordMatch.innerHTML = `${iconError} ${passwordMatchValidation.errorMessage}`;
    };

    // Formulário
    if (formIsValiD) {
        form.submit();
    };

});

// Função para disparar o evento de reset
const resetButton = document.querySelector("#limpar");

resetButton.addEventListener("click", (evento) => {
    const allErrors = document.querySelector(".error");
    allErrors.forEach((error) => {
        error.innerHTML = ``; // Limpa os erros ao resetar o formulário
    });
})

// Função para ver se o valor é vazio
function isEmpty (value) {
    return value === ''; // Se o valor for vazio, ele retorna 'TRUE'
};

// Função para expressões regulares
function regularExpressions () {
    return {
        apenasLetras: /^[a-zA-Z]+$/,
        senha: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
        email: /^([a-zA-Z0-9._%+-]{2,})(@)([a-zA-Z0-9.-]{2,})(\.)([a-zA-Z]{2,})(\.)([a-z]{2,})?$/,
        telefone: /\([0-9]{2}\)\s([0-9]{4,5})\-([0-9]{4})/g,
        hora: /./
    };
};

// Função para validar o nome
function isValidName (value) {
    const validatorName = {
        isValid: true,
        errorMessage: null
    }

    // Mensagem caso o campo esteja vazio
    if (isEmpty(value)) {
        validatorName.isValid = false;
        validatorName.errorMessage = 'O campo esta vazio!';
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
    if (!(regularExpressions().apenasLetras).test(value)) {
        validatorName.isValid = false;
        validatorName.errorMessage = `O campo contém números!`;
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
        validatorSurname.errorMessage = `O campo está vazio!`;
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
    if (!(regularExpressions().apenasLetras).test(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O campo contém números!`;
        return validatorSurname;
    }

    return validatorSurname;
};

// Função para validar email
function isValidEmail (value) {
    const validatorEmail = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validatorEmail.isValid = false;
        validatorEmail.errorMessage = `O campo está vazio!`;
        return validatorEmail;
    }

    if (!(regularExpressions().email).test(value)) {
        validatorEmail.isValid = false;
        validatorEmail.errorMessage = `O email precisa ser válido!`;
        return validatorEmail;
    }

    return validatorEmail;
};

// Função para validar números de telefone
function isValidTelephone (value) {
    const validatorTelephone = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validatorTelephone.isValid = false;
        validatorTelephone.errorMessage = `O campo esta vazio!`;
        return validatorTelephone;
    }

    if (!(regularExpressions().telefone).test(value)) {
        validatorTelephone.isValid = false;
        validatorTelephone.errorMessage = `O telefone precisa ser válido!`;
        return validatorTelephone;
    }

    return validatorTelephone;
};

// Função para validar a data
function isValidDate (value) {
    const validatorDate = {
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validatorDate.isValid = false;
        validatorDate.errorMessage = 'O nascimento é obrigatório!';
        return validatorDate;
    }

    const year = new Date(value).getFullYear() // 
    if (year < 1920 || year > new Date().getFullYear()) {
        validatorDate.isValid = false;
        validatorDate.errorMessage = 'Data inválida!';
        return validatorDate;
    }

    return validatorDate;
};

// Função para validar a senha
function isValidPassword (value) {
    const validatorPassword = {
        isValidPassword: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validatorPassword.isValidPassword = false;
        validatorPassword.errorMessage = `A senha é obrigatória!`;
        return validatorPassword;
    }

    const min = 8;
    if (value.length < min) {
        validatorPassword.isValidPassword = false;
        validatorPassword.errorMessage = 'O campo possui menos de 8 caracteres!';
        return validatorPassword;
    }

    // Validação para senha: 1 caracter minúsculo, 1 caracter maiusculo, 1 numero, e pelo menos 1 caracter especial (@, #, !, $, %), não pode conter espaços em branco
    if (!(regularExpressions().senha).test(value)) {
        validatorPassword.isValidPassword = false;
        validatorPassword.errorMessage = `
            A sua senha deve conter pelo menos: <br/>
            1 letra maiúscula <br/>
            1 letra minúscula <br/>
            1 número <br/>
            1 caracter especial!
        `;
        return validatorPassword;
    }

    return validatorPassword;
};

// Função para confirmar a senha
function passwordConfirm (passwordValue, value) {
    const validatorPasswordConfirm = {
        isValidPassword: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validatorPasswordConfirm.isValidPassword = false;
        validatorPasswordConfirm.errorMessage = `Confimar senha é obrigatória!`;
        return validatorPasswordConfirm;
    }

    if (passwordValue != value) {
        validatorPasswordConfirm.isValidPassword = false;
        validatorPasswordConfirm.errorMessage = `As senhas não condizem!`;
        return validatorPasswordConfirm;
    }

    return validatorPasswordConfirm;
};