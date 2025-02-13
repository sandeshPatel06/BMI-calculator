document
  .getElementById("bmi-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    // Validate input
    if (isNaN(weight) || isNaN(height) || height <= 0) {
      errorDiv.textContent =
        "Please enter valid numbers for weight and height.";
      errorDiv.style.display = "block";
      resultDiv.style.display = "none";
      return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    let category = "";

    // Determine BMI category
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    // Display results
    document.getElementById("bmi-value").textContent = bmi.toFixed(2);
    document.getElementById("bmi-category").textContent = category;
    resultDiv.style.display = "block";
    errorDiv.style.display = "none";
  });

// Reset button functionality
document
  .querySelector('button[type="reset"]')
  .addEventListener("click", function () {
    document.getElementById("result").style.display = "none";
    document.getElementById("error").style.display = "none";
  });
