let podminka = !false;

podminka = true && false;

podminka = false || true;

console.log(podminka)

// podmínka pře if

let number = 10;
let message;

if (number > 0) {
    message = "kladné číslo"
} else {
    message = "není kladné"
}

console.log(message);

// druhé řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "kladné číslo" : "není kladné číslo";

console.log(message2)