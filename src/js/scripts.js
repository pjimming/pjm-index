//
// Scripts
// 

function getCopyrightYear() {
    var startYear = 2022;
    var endYear = new Date().getFullYear();
    if (startYear === endYear) {
        return startYear;
    }
    return startYear + "-" + endYear;
}

window.onload = function () {
    document.getElementById("copyrightYear").textContent = getCopyrightYear();
};
