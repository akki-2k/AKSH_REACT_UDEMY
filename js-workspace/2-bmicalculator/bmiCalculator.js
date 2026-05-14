const form = document.querySelector('form');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
const height = parseInt((document.getElementById('height').value))/100
const weight = parseInt(document.getElementById('weight').value)

function calculateBmi(height, weight){
    let bmi;
    bmi= (weight/(height*height));
    return bmi.toFixed(2);
}
const bmiResult = calculateBmi(height, weight);
let result =  document.getElementById('results');
result.textContent = `Your BMI is ${bmiResult}`

});