// //phone 
// prodectQuantity("phone-plus", "phone-cuntiti", +1, "phone-price", 1219);
// prodectQuantity("phone-minus", "phone-cuntiti", -1, "phone-price", 1219);

// //case
// prodectQuantity("case-plus", "case-quantity", 1, "case-total", 59);
// prodectQuantity("case-minus", "case-quantity", -1, "case-total", 59);










// function prodectQuantity(id, count, val, priceCount, priceMain) {

//     document.getElementById(id).addEventListener("click", () => {
//         let phoneCuntiti = document.getElementById(count);
//         let phoneCount = parseInt(phoneCuntiti.value);
//         let NewCount = phoneCount + val;
//         phoneCuntiti.value = NewCount;
//         //price
//         let Price = NewCount * priceMain;
//         document.getElementById(priceCount).innerText = Price;
//         // document.getElementById("sub-total").innerText =1278+priceMain;

//         // console.log(price)
//     })
// }

//! Phone
document.getElementById("phone-plus").addEventListener("click", () => {
    handleProductChange(true, "phone-cuntiti", "phone-price", 1219);
});
document.getElementById("phone-minus").addEventListener("click", () => {
    handleProductChange(false, "phone-cuntiti", "phone-price", 1219);
});
//! case
document.getElementById("case-plus").addEventListener("click", () => {
    handleProductChange(true, "case-quantity", "case-total", 59);
});
document.getElementById("case-minus").addEventListener("click", () => {
    handleProductChange(false, "case-quantity", "case-total", 59);
});

function handleProductChange(isIncrease, cuntiti, countId, val) {
    const input = document.getElementById(cuntiti);
    const inputCount = parseInt(input.value)
    let inputNewCount = inputCount;
    if (isIncrease == true) {
        inputNewCount = inputCount + 1;
    } if (isIncrease == false && inputCount > 0) {
        inputNewCount = inputCount - 1;
    }
    input.value = inputNewCount;
    document.getElementById(countId).innerText = inputNewCount * val;
    calculateTotal() 
    // console.log(inputCount)

}
function calculateTotal() {
    const phoneinput = document.getElementById("phone-cuntiti");
    const phoneCount = parseInt(phoneinput.value);
    const caseinput = document.getElementById("case-quantity");
    const casecount = parseInt(caseinput.value);
    const totalprice = phoneCount * 1219 + casecount * 59;
    document.getElementById("sub-total").innerText = totalprice;

    const tax=Math.round(totalprice/10) ;
    document.getElementById("tax-amount").innerText=tax;
    const AllToal=totalprice+tax;
    document.getElementById("total-price").innerText=AllToal;
}


document.querySelector("#phone-remove").addEventListener("click",()=>{

    displayNon("#cart-item1")
});
document.querySelector("#case-remove").addEventListener("click",()=>{

    displayNon("#cart-item2")
});
function displayNon(id){
    let cart_item1=document.querySelector(id);
    cart_item1.style="display:none" 
}

document.getElementById("check-btn").addEventListener("click",()=>{
    alert("Order successfully")
})
