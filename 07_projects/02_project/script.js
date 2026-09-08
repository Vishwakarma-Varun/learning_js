const form = document.querySelector("form")
console.log(form)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    const category = document.querySelector("#bmi-category");
    const result = document.querySelector("#bmi-result");
    result.innerHTML = `<span>${bmi}</span>`
    if (bmi < 18.5){
        category.innerHTML = "You are Underweight"
    }
    else if (bmi >= 18.5 && bmi < 25){
        category.innerHTML = "You are Normal"
    }
    else if (bmi >= 25 && bmi < 30){
        category.innerHTML = "You are Overweight"
    }
    else{
        category.innerHTML = "Your are Obese"
    }
})