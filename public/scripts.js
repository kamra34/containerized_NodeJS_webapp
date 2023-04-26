$(document).ready(function () {
    $("#age-slider").roundSlider({
      sliderType: "min-range",
      handleShape: "round",
      width: 22,
      radius: 75,
      value: 30,
      min: 1,
      max: 120,
      step: 1,
      tooltipFormat: "Age: {0}",
      change: function (event) {
        document.getElementById("age").value = event.value;
      },
    });
  
    $("#weight-slider").roundSlider({
      sliderType: "min-range",
      handleShape: "round",
      width: 22,
      radius: 75,
      value: 60,
      min: 1,
      max: 300,
      step: 0.1,
      tooltipFormat: "Weight: {0} kg",
      change: function (event) {
        document.getElementById("weight").value = event.value;
      },
    });
  
    document.getElementById("edit-info").addEventListener("click", function () {
      document.getElementById("user-info").style.display = "block";
      document.getElementById("user-display").hidden = true;
    });
  
    document.getElementById("userInfoForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const height = document.getElementById("height").value;
  
      document.getElementById("name-display").textContent = name;
      document.getElementById("age-display").textContent = age;
      document.getElementById("height-display").textContent = height;
  
      document.getElementById("user-info").style.display = "none";
      document.getElementById("user-display").hidden = false;
    });
  
    document.getElementById("weightForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const weight = document.getElementById("weight").value;
      const date = document.getElementById("date").value;
      const height = document.getElementById("height").value;
  
      if (!weight || !date || !height) return;
  
      const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${date}</td>
        <td>${weight}</td>
        <td>${bmi}</td>
      `;
      document.getElementById("weightTable").querySelector("tbody").appendChild(row);
  
      document.getElementById("weightForm").reset();
    });
  });
  