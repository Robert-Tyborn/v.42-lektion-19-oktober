// Write your code here




const calculateButton = document.querySelector('#calculateButton');
const showSumElem = document.querySelector('#showSum');
const inputFormElem = document.querySelector('#inputForm');
const friendSumElem = document.querySelector('#friendSum');

function calculateTip(sum, tip) {
    const calculatedTip = parseInt(sum) * parseFloat(tip); 
    const total = parseInt(sum) + calculatedTip;
    return total;
}
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / parseInt(numberOfFriends);
    return sumDivided;
}
function showDividedSum(sum) {

    inputFormElem.classList.toggle('hide');
    showSumElem.classList.toggle('hide');
    friendSumElem.innerHTML = sum + ' kr';
}


calculateButton.addEventListener('click', () => {
    const sum = document.querySelector('#sum').value;
    const numberOfFriends = document.querySelector('#numberOfFriends').value;
    const tip = document.querySelector('#tip').value;

    const total = calculateTip(sum, tip); // använde samma const igen
    const friendSum = divideTotal(total, numberOfFriends);
    showDividedSum(friendSum);
});







return calculatedTip;






  

  


 
    




