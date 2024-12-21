function calculateClick(event) {
    event.preventDefault();
    var age = document.querySelector("#age").value;
    var height = document.querySelector("#height").value;
    var weight = document.querySelector("#weight").value;
    var BMI_Value = (weight / ((Math.pow(height, 2))) * 10000);
    if (BMI_Value <= 18.49) {
        document.querySelector("#printBMIValue").innerHTML = `<h3 style="color:gray;">Under Weight</h3>Your BMI value is ${BMI_Value.toFixed(1)}`;
    }
    else if (BMI_Value >= 18.50 && BMI_Value <= 24.99) {
        document.querySelector("#printBMIValue").innerHTML = `<h3 style="color:green;">Normal Weight</h3>Your BMI value is ${BMI_Value.toFixed(1)}`;
    }
    else if (BMI_Value >= 25.00 && BMI_Value <= 39.99) {
        document.querySelector("#printBMIValue").innerHTML = `<h3 style="color:gold;">Over Weight</h3>Your BMI value is ${BMI_Value.toFixed(1)}`;
    }
    else if (BMI_Value >= 40.00) {
        document.querySelector("#printBMIValue").innerHTML = `<h3 style="color:red;">Obese</h3>Your BMI value is ${BMI_Value.toFixed(1)}`;
    }
    else {
        document.querySelector("#printBMIValue").innerHTML = `<h4 style="color:red;">Fill the above details!</h4`;
    }
}