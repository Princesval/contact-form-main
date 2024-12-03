// button
const button = document.getElementById("submit-button");

// Name
const fnInput = document.getElementById("first-name-input");
const fnSpan = document.getElementById("fn-span")

const lnInput = document.getElementById("last-name-input");
const lnSpan = document.getElementById("ln-span");

function checkName(firstNmae, lastName){
    let checkFirstName;
    let checkLastName;
    if (firstNmae.value === '') {
        fnSpan.style.display = 'block';
        firstNmae.style.border = '1px solid var(--Red)';
        checkFirstName = false;
    } else {
        fnSpan.style.display = 'none';
        firstNmae.style.border = '1px solid var(--Grey500Medium)';
        checkFirstName = true;
    }

    if (lastName.value === '') {
        lnSpan.style.display = 'block';
        lastName.style.border = '1px solid var(--Red)';
        checkLastName = false;
    } else {
        lnSpan.style.display = 'none';
        lastName.style.border = '1px solid var(--Grey500Medium)';
        checkLastName = true;
    }

    if (checkFirstName === true && checkLastName === true) {
        return true;
    }
}

// Email
const emailInput = document.getElementById("email-input");
const validEmailSpan = document.getElementById("valid-email-span");
const emptyEmailSpan = document.getElementById("empty-email-span");

function checkEmail(email) {
    emailValue = email.value
    if (emailValue === '') {
        emptyEmailSpan.style.display = 'block';
        email.style.border = '1px solid var(--Red)';
    } else if (emailValue.length > 0) {
        if (emailValue.indexOf('@') === -1) {
            validEmailSpan.style.display = 'block';
            email.style.border = '1px solid var(--Red)';
        } else {
            validEmailSpan.style.display = 'none';
            emptyEmailSpan.style.display = 'none';
            email.style.border = '1px solid var(--Grey500Medium)';
            return true;
        }
    }
}    

// Radio input
const radio1 = document.getElementById("general-enquiry-input");
const radio2 = document.getElementById("support-request-input");
const radioSpan = document.getElementById("radio-span")

function checkRadio() {
    if (radio1.checked || radio2.checked) {
        radioSpan.style.display = 'none';
        return true;
    } else {
        radioSpan.style.display = 'block';
    }
}

// TextArea
const textArea = document.getElementById("mesage-area");
const textAreaSpan = document.getElementById("text-area-span")
function checkTextArea(text){
    const value = text.value.trim();
    if (value === '') {
        text.style.border = '1px solid var(--Red)';
        textAreaSpan.style.display = 'block';
    } else {
        text.style.border = '1px solid var(--Grey500Medium)';
        textAreaSpan.style.display = 'none';
        return true;
    }
}

// Checkbox
const checkbox = document.getElementById("consent-input");
const checkboxSpan = document.getElementById("check-span");

function checkCheckbox() {
    if (checkbox.checked) {
        checkboxSpan.style.display = 'none';
        return true;
    } else {
         checkboxSpan.style.display = 'block';
    }
}

// Success
const successDiv = document.getElementById("confirmation-div")

function checkAll() {
    checkName(fnInput, lnInput);
    checkEmail(emailInput);
    checkRadio();
    checkTextArea(textArea);
    checkCheckbox();
    if (
        checkName(fnInput, lnInput) === true &&
        checkEmail(emailInput) === true &&
        checkRadio() === true &&
        checkTextArea(textArea) === true && 
        checkCheckbox() === true
    ) {
        console.log("tudo certo no formulário")
        successDiv.style.display = 'block';
    } else {
        console.log("algo está errado no formulário")
        successDiv.style.display = 'none'
    }

}

// Main code
button.addEventListener('click', ()=> {
    checkAll()
})

// CSS
const radioDiv1 = document.getElementById("general-enquiry-div");
const radioDiv2 = document.getElementById("support-request-div")
radio1.addEventListener('click', ()=> {
    radioDiv1.style.backgroundColor = 'var(--Green200Lighter)';
    radioDiv2.style.backgroundColor = 'var(--White)';
});

radio2.addEventListener('click', ()=> {
    radioDiv2.style.backgroundColor = 'var(--Green200Lighter)';
    radioDiv1.style.backgroundColor = 'var(--White)';
});