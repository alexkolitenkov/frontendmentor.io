const submit = document.querySelector('.button');
const scores = document.querySelector('.rating');

const buttonPressed = e => {
    scores.dataset.value = e.target.innerText;
}
scores.addEventListener('click', buttonPressed);

function showMessage() {
    if (scores.dataset.value.length !== 1) {

    } else {
        document.body.style.textAlign = 'center'
        let heading = document.querySelector('h2');
        console.log(heading);
        heading.innerText = "Thank you!";
        document.documentElement.style.setProperty('--h2-before-background-image', "url(images/illustration-thank-you.svg)");
        document.documentElement.style.setProperty('--h2-before-background-color', "inherit");
        document.documentElement.style.setProperty('--h2-before-background-size', "contain");
        document.documentElement.style.setProperty('--h2-before-width', "9rem");
        document.documentElement.style.setProperty('--h2-before-height', "9rem");
        document.documentElement.style.setProperty('--h2-before-border-radius', "0");
        document.documentElement.style.setProperty('--h2-before-margin', "0 auto 5rem");
        let text = document.querySelector('p');
        text.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`
        submit.style.display = "none";

        const divRelative = document.querySelector('.relative');
        let span1 = document.createElement('span');
        span1.textContent = `You selected ${scores.dataset.value} out of 5`;
        span1.className = 'selected-score';
        divRelative.prepend(span1);
        scores.style.display = 'none';
    }
}
submit.addEventListener('click', showMessage);
