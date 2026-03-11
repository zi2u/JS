let totalprice = 300;

if (totalprice >= 100) {
    let discountedprice = 0.7*totalprice;
    console.log("získáváte slevu! cena je: " + discountedprice + "Kč")
} else{
    let rest = 100 - totalprice
    cnsole.log("utraťte ještě" + rest + "Kč a získejte slevu 30%")
}