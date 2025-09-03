// function calculateAge(){
//  // get value from input field

//  let day = parseInt(document.getElementById("day").value);
//  let month = parseInt(document.getElementById("month").value);
//  let year = parseInt(document.getElementById("year").value);

// // validate input value
// if (day || month || year ||day <1 || day >31 || month <1 ||month>12 || year <1990 ||year >2100){
//     showError();
//     return;
// }

// // convert input in a valid Date object (dob - date of bieth)
// let dob = new Date(year, month-1, day);
// let today = new Date();

// //calculate AGE diffrece 
// let ageyears = today.getFullYear() - dob.getFullYear();
// let ageMonths = today.getFullMonth() - dob.getFullMonth();
// let ageDays = today.getFullDate() - dob.getFullDate();

// // adjust value if the day / month has not occured yet 
//  if (ageDays < 0){
//     ageMonths--;
//     let lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0) .getDate();
//     ageDays += 12;
//  }

//  if (ageMonths < 0){
//     ageyears--;
//     ageMonths += 12;

//  }

//  // disaply the calculate age 

//  displayAge(ageyears, ageMonths,ageDays);

//  // clear input field after a short delay 
//  setTimeout (clearInputs,500);

// }

// //funcnion to display age in the respective boxes

// function disaplyAge(years, months,days){
//     document.getElementById("years-box").innerText =   `${years} \nYear`;
//     document.getElementById("years-box").innerText =   `${months} \nMonth`;
//     document.getElementById("years-box").innerText =   `${days} \nDay`;

// }

// function showError(){
//     document.body.style.backgroundColor ="red";
//     setTimeout(()=> document.body.style.backgroundColor = "#e0e5ec",500);
// }

// // function to celar input 

// function clearInput(){
//     document.getElementById("day").value = "";
//     document.getElementById("month").value = "";
//     document.getElementById("year").value = "";
// }



function calculateAge() {
    // get value from input field
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    // validate input value
    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2100) {
        showError();
        return;
    }

    // convert input in a valid Date object
    let dob = new Date(year, month - 1, day);
    let today = new Date();

    // calculate age difference
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // adjust value if the day/month has not occurred yet
    if (ageDays < 0) {
        ageMonths--;
        let lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += lastMonthDays;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    // display the calculated age
    displayAge(ageYears, ageMonths, ageDays);

    //!  document.body.style.backgroundColor = " black";
    //! setTimeout(() => document.body.style.backgroundColor = "#e0e5ec", 500);

    // clear input fields after short delay
    setTimeout(clearInput, 500);
}

// function to display age in the respective boxes
function displayAge(years, months, days) {
    document.getElementById("years-box").innerText = `${years} Y`;
    document.getElementById("month-box").innerText = `${months} M`;
    document.getElementById("days-box").innerText = `${days} D`;
}

function showError() {
    document.body.style.backgroundColor = "red";
    setTimeout(() => document.body.style.backgroundColor = "#e0e5ec", 500);
}

// function to clear input
function clearInput() {
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
}
