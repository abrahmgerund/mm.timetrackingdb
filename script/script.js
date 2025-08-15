const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');


let userData = [];

const fetchUser = function () {
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => userData = data)
        .catch((error) => console.log('error warning'));
}

const getDaily = function () {
        const h1s = document.querySelectorAll('h1');
        h1s.forEach((h1, index) => {
                h1.innerText = `${userData[index].timeframes.daily.current}hrs`;
        });

        const ps = document.querySelectorAll('h1 + p');
        ps.forEach((p, index) => {
                p.innerText = `Yesterday - ${userData[index].timeframes.daily.previous}hrs`;
        });
        // console.log(data[0].timeframes.daily.current);
};

const getWeekly = function () {
        const h1s = document.querySelectorAll('h1');
        h1s.forEach((h1, index) => {
                h1.innerText = `${userData[index].timeframes.weekly.current}hrs`;
        });

        const ps = document.querySelectorAll('h1 + p');
        ps.forEach((p, index) => {
                p.innerText = `Last Week - ${userData[index].timeframes.weekly.previous}hrs`;
        });
        // console.log(data[0].timeframes.daily.current);
};

const getMonthly = function () {
        const h1s = document.querySelectorAll('h1');
        h1s.forEach((h1, index) => {
                h1.innerText = `${userData[index].timeframes.monthly.current}hrs`;
        });

        const ps = document.querySelectorAll('h1 + p');
        ps.forEach((p, index) => {
                p.innerText = `Last Month - ${userData[index].timeframes.monthly.previous}hrs`;
        });
        // console.log(data[0].timeframes.daily.current);
};

const weeklyClicked = function () {
    document.querySelector('#weekly').checked = true;
}




dailyBtn.addEventListener('click', getDaily);
weeklyBtn.addEventListener('click', getWeekly);
monthlyBtn.addEventListener('click', getMonthly);
document.addEventListener('DOMContentLoaded', weeklyClicked);

fetchUser();