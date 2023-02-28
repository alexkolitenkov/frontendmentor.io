const inputEmail = document.getElementById('mail');
const btnSubmit = document.getElementById('btn-submit');



function verification() {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.value === '' || !re.test(inputEmail.value)) {
        document.getElementById('error-icon').style.display = 'block';
        document.getElementById('error-message').style.display = 'block';
        inputEmail.style.border = "2px solid var(--clr-primary-500)";
    } else {
        inputEmail.style.border = "2px solid green";
        document.getElementById('error-icon').style.display = 'none';
        document.getElementById('error-message').style.display = 'none';
    }
}

btnSubmit.addEventListener('click', verification);
