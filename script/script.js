const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');

// fetch('../data.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log('error warning'));

const getDaily = function () {
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        const h1s = document.querySelectorAll('h1');
        h1s.forEach((h1, index) => {
                h1.innerText = `${data[index].timeframes.daily.current}hrs`;
        });

        const ps = document.querySelectorAll('h1 + p');
        ps.forEach((p, index) => {
                p.innerText = `Last Week - ${data[index].timeframes.daily.previous}hrs`;
        });

        // console.log(data[0].timeframes.daily.current);

    })
    .catch((error) => console.log('error warning'));
}

const getWeekly = function () {
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        const h1s = document.querySelectorAll('h1');
        h1s.forEach((h1, index) => {
                h1.innerText = `${data[index].timeframes.weekly.current}hrs`;
        });

        const ps = document.querySelectorAll('h1 + p');
        ps.forEach((p, index) => {
                p.innerText = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
        });

        // console.log(data[0].timeframes.daily.current);

    })
    .catch((error) => console.log('error warning'));
}

const getMonthly = function () {
    fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
        const h1s = document.querySelectorAll('h1');
        h1s.forEach((h1, index) => {
                h1.innerText = `${data[index].timeframes.monthly.current}hrs`;
        });

        const ps = document.querySelectorAll('h1 + p');
        ps.forEach((p, index) => {
                p.innerText = `Last Week - ${data[index].timeframes.monthly.previous}hrs`;
        });

        // console.log(data[0].timeframes.daily.current);

    })
    .catch((error) => console.log('error warning'));
}

const weeklyClicked = function () {
    document.querySelector('#weekly').checked = true;
}


dailyBtn.addEventListener('click', getDaily);
weeklyBtn.addEventListener('click', getWeekly);
monthlyBtn.addEventListener('click', getMonthly);
document.addEventListener('DOMContentLoaded', weeklyClicked);

// console.log(document.querySelectorAll('h1'));