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
    let errorSpanName = newElement(inputBoxName);
    errorSpanName = inputBoxName.querySelector(".error");

    const nameValidation = isValidName(nomeValue);
    if (!nameValidation.isValid) {
        formIsValiD = false;
        errorSpanName.innerHTML = `${iconError} ${nameValidation.errorMessage}`;
    };

    // Sobrenome
    const surname = document.querySelector("#isobrenome");
    const surnameValue = surname.value;

    const inputBoxSurname = surname.closest(".input-box");
    let errorSpanSurname = newElement(inputBoxSurname)
    errorSpanSurname = inputBoxSurname.querySelector(".error");

    const surnameValidation = isValidSurname(surnameValue);
    if (!surnameValidation.isValid) {
        formIsValiD = false;
        errorSpanSurname.innerHTML = `${iconError} ${surnameValidation.errorMessage}`;
    };

    // Email
    const email = document.querySelector("#iemail");
    const emailValue = email.value

    const inputBoxEmail = email.closest(".input-box");
    let errorSpanEmail = newElement(inputBoxEmail)
    errorSpanEmail = inputBoxEmail.querySelector(".error");

    const emailValidation = isValidEmail(emailValue);
    if (!emailValidation.isValid) {
        formIsValiD = false;
        errorSpanEmail.innerHTML = `${iconError} ${emailValidation.errorMessage}`;
    };

    // Telefone
    const telephone = document.querySelector("#itel");
    const telephoneValue = telephone.value;

    const inputBoxTelephone = telephone.closest(".input-box");
    let errorSpanTelephone = newElement(inputBoxTelephone)
    errorSpanTelephone = inputBoxTelephone.querySelector(".error");

    const telephoneValidation = isValidTelephone(telephoneValue);
    if (!telephoneValidation.isValid) {
        formIsValiD = false;
        errorSpanTelephone.innerHTML = `${iconError} ${telephoneValidation.errorMessage}`;
    };

    // Data
    const date = document.querySelector("#idata");
    const dateValue = date.value;

    const inputBoxDate = date.closest(".input-box");
    let errorSpanDate = newElement(inputBoxDate)
    errorSpanDate = inputBoxDate.querySelector(".error");

    const dateValidation = isValidDate(dateValue);
    if (!dateValidation.isValid) {
        formIsValiD = false;
        errorSpanDate.innerHTML = `${iconError} ${dateValidation.errorMessage}`
    };

    // Senha
    const password = document.querySelector("#isenha");
    let passwordValue = password.value;

    const inputBoxPassword = password.closest(".input-box");
    let errorSpanPassword = newElement(inputBoxPassword)
    errorSpanPassword = inputBoxPassword.querySelector(".error");

    const passwordValidation = isValidPassword(passwordValue);
    if (!passwordValidation.isValid) {
        formIsValiD = false;
        errorSpanPassword.innerHTML = `${iconError} ${passwordValidation.errorMessage}`;
    };

    // Confirmar senha
    const passwordMatch = document.querySelector("#isenhaConfirmar")
    const passwordMatchValue = passwordMatch.value

    const inputBoxPasswordMatch = passwordMatch.closest(".input-box");
    let errorSpanPasswordMatch = newElement(inputBoxPasswordMatch)
    errorSpanPasswordMatch = inputBoxPasswordMatch.querySelector(".error");

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

// Função para resetar o formulário
resetButton.addEventListener("click", (evento) => {
    const allErrors = document.querySelectorAll(".error");
    allErrors.forEach((error) => {
        error.innerHTML = ``; // Limpa os erros ao resetar o formulário
    });
})

// Função para criar o errorSpan
function newElement (father) {
    const novoElemento = document.createElement("span");
    novoElemento.setAttribute("class", "error");
    novoElemento.innerHTML = '';
    father.appendChild(novoElemento)
    return novoElemento;
};

// Função para ver se o valor é vazio
function isEmpty (value) {
    return value === ''; // Se o valor for vazio, ele retorna 'TRUE'
};

// Função para expressões regulares
function regularExpressions () {
    return {
        minName: /^[a-zA-Z]{3,}$/,
        apenasLetras: /^[a-zA-Z\s]+$/,
        senha: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
        minPassword: /^[a-zA-Z]{8,}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        telefone: /^(?:\(\d{2}\)\s?)?\d{4,5}-\d{4}$/,
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
        validatorName.errorMessage = 'O nome é obrigatório!';
        return validatorName;
    }

    // Mensagem caso o campo tenha menos de 3 caracteres
    if (!(regularExpressions().minName).exec(value)) {
        validatorName.isValid = false;
        validatorName.errorMessage = `O campo tem que ter pelo menos 3 caracteres!`;
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
        validatorSurname.errorMessage = `O sobrenome é obrigatório!`;
        return validatorSurname;
    }

    // Função para ver o mínimo de caracteres
    if (!(regularExpressions().minName).exec(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O campo deve haves pelo menos 3 caracteres!`;
        return validatorSurname; 
    }

    // Função para ver se contem números
    if (!(regularExpressions().apenasLetras).test(value)) {
        validatorSurname.isValid = false;
        validatorSurname.errorMessage = `O campo deve conter apenas letras!`;
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
        validatorEmail.errorMessage = `O email é obrigatório!`;
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
        validatorTelephone.errorMessage = `O telefone é obrigatório!`;
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
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validatorPassword.isValid = false;
        validatorPassword.errorMessage = `A senha é obrigatória!`;
        return validatorPassword;
    }

    if (!(regularExpressions().minPassword).exec(value)) {
        validatorPassword.isValid = false;
        validatorPassword.errorMessage = 'O campo possui menos de 8 caracteres!';
        return validatorPassword;
    }

    // Validação para senha: 1 caracter minúsculo, 1 caracter maiusculo, 1 numero, e pelo menos 1 caracter especial (@, #, !, $, %), não pode conter espaços em branco
    if (!(regularExpressions().senha).test(value)) {
        validatorPassword.isValid = false;
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
        isValid: true,
        errorMessage: null
    }

    if (isEmpty(value)) {
        validatorPasswordConfirm.isValid = false;
        validatorPasswordConfirm.errorMessage = `Confimar senha é obrigatória!`;
        return validatorPasswordConfirm;
    }

    if (passwordValue !== value) {
        validatorPasswordConfirm.isValid = false;
        validatorPasswordConfirm.errorMessage = `As senhas não condizem!`;
        return validatorPasswordConfirm;
    }

    return validatorPasswordConfirm;
};