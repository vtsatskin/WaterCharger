document.addEventListener("DOMContentLoaded", function() {
  var percentageInput = document.querySelector("#battery-percentage");
  var wave = document.querySelector("#wave");

  var isValidInput = function(value) {
    return typeof value === "string" && value != "" && !isNaN(value);
  }

  percentageInput.addEventListener("input", function(event) {
    if(!isValidInput(percentageInput.value)) {
      return;
    }

    var percentage = parseInt(percentageInput.value);
    var height = 550;
    var offset =  -(height/2 + 70) * (percentage-50)/100;
    wave.style.top = "calc(50% + " + offset + "px)";
  });
});
