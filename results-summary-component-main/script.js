const sumElements = document.querySelectorAll('.summary-element');
const qualityScores = document.querySelectorAll('.quality-scores');
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    for (let j = 0; j < sumElements.length; j++) {
        let span = document.createElement('span');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let spanP = document.createElement('span');
        spanP.classList.add('card-score');
        img.src = data[j].icon;
        img.alt = `${data[j].category} Icon`;
        h3.innerHTML = data[j].category;
        span.appendChild(img);
        span.appendChild(h3);
        sumElements[j].prepend(span);
        spanP.innerHTML = data[j].score;
        qualityScores[j].prepend(spanP);
    }
}