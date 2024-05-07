function checkLeapYear() {
    var year = parseInt(document.getElementById("yearInput").value);
    var resultPara = document.getElementById("result");

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        resultPara.textContent = year + " ist ein Schaltjahr!";
    } else {
        resultPara.textContent = year + " ist kein Schaltjahr.";
    }
}


  