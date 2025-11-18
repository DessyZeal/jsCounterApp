const countDisplay = document.getElementById('countDisplay');
const addBtn = document.getElementById('addBtn');
const resetBtn = document.getElementById('resetBtn');
const subBtn = document.getElementById('subBtn');

let count = 0;

addBtn.addEventListener('click', () => {
    count ++;
    countDisplay.textContent = count;

    addBtn.style.backgroundColor = "green";
    setTimeout(() => {
        addBtn.style.backgroundColor = "";

    }, 1000);
})

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
})

subBtn.addEventListener('click', () => {
    count -= 1;
    countDisplay.textContent = count;

    subBtn.style.backgroundColor = "red";
    setTimeout(() => {
        subBtn.style.backgroundColor = "";
    }, 1000);
})