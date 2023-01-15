const plus_icon = document.getElementById("plus_icon");
const minus_icon = document.getElementById("minus_icon");
const item_valu= document.getElementById("item_valu");
let m=1;
plus_icon.addEventListener("click", function () {

  m++;
   m = (a < 10) ;
   item_valu.innerText=m;
});

// const plus = document.querySelector(".plus");
//    const minus = document.querySelector(".minus");
//    const num = document.querySelector(".num");
//     let a = 1;
//     plus.addEventListener("click", ()=>{
//       a++;
//       a = (a < 10) ? "0" + a : a;
//       num.innerText = a;
//     });

//     minus.addEventListener("click", ()=>{
//       if(a > 1){
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         num.innerText = a;
//       }
//     });


















// function plus_muns_V (id){
//     m++;
//   document.getElementById(id).value=m;

// }


  


// <script>

// var n = 0;

// function buttonClick() {

// n++;

// document.getElementById('increament').value = n;

// }

// </script>

// <button onclick="buttonClick();">Click Me</button>

// <input type="text" id="increament" value="0"></input>