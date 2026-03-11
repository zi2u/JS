//vnořené podmínky
let isloggedin = true;
let isadmin = false;

if (isloggedin){
    console.log("vítej na stránce!")
    if (isadmin){
        console.log("přístup do panelu admin povolen")
    } else{
        console.log("přístup jako uživatel povolen")
    }
}

// operátory

let age = 20;
let hasdriverlicense = false;

if (age >=18 && hasdriverlicense) {
    console.log("může řídit");
} else {console.log("nesmí řídit")
}
let isholiday = false;
let isweekend = true;

if (isholiday || isweekend) {
    console.log("je čas relaxovat")
} else {
    console.log("je čas fárat.")
}

