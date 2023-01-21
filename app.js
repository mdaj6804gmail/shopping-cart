//phone 
prodectQuantity("phone-plus", "phone-cuntiti", +1, "phone-price", 1219);
prodectQuantity("phone-minus", "phone-cuntiti", -1, "phone-price", 1219);

//case
prodectQuantity("case-plus", "case-quantity", 1, "case-total", 59);
prodectQuantity("case-minus", "case-quantity", -1, "case-total", 59);










function prodectQuantity(id, count, val, priceCount, priceMain) {

    document.getElementById(id).addEventListener("click", () => {
        let phoneCuntiti = document.getElementById(count);
        let phoneCount = parseInt(phoneCuntiti.value);
        let NewCount = phoneCount + val;
        phoneCuntiti.value = NewCount;
        //price
        let Price = NewCount * priceMain;
        document.getElementById(priceCount).innerText = Price;
        // document.getElementById("sub-total").innerText =1278+priceMain;

        // console.log(price)
    })
}





