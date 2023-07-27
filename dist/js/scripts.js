/*!
* PJM Index - Index v1.0.0 (https://pjmcode.top)
* Copyright 2023-2023 panjiangming
* Licensed under MIT (https://github.com/pjimming/pjm-index/blob/master/LICENSE)
*/
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
