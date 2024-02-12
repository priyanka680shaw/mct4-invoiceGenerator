/* ***********************Add Items Colums ***************************** */

const itemsContainer = document.querySelector(".items-Container");

const table = document.querySelector("table");

var count = 0;

function addProdductItem(e){
  //console.log(e);
  e.preventDefault();

  //console.log(e.target.classList.contains("total"))
  //added items by using if conition 
  if(e.target.innerText==="+"){
    count = parseInt(count+1);
    itemsContainer.innerHTML +=
    `<tr class="productBlock">
    <th>${count}</th>
    <td>  <input type="text"  class="form-control text-center ${count}" placeholder="Product" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <input type="number" class="form-control text-center ${count} quantity" placeholder="quantity" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <input type="number" class="form-control text-center ${count} amount" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <input type="" class="form-control text-center ${count} total" placeholder="total" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <button type="button" class="btn btn-danger ${count} deleteBtn">X</button></td>
   </tr>`
   //console.log("insidde if" , e.target.classList.contains("total"))
   let total = document.querySelector(".total");
    //console.log(e.target.classList[total]);

    
  }
  //calculateAllProductTotal(e);
}

table.addEventListener("click", addProdductItem);

/* ************************ Add Items Colums End**************************** */

/* ************************ Items Delete **************************** */

itemsContainer.addEventListener("click" , (e) => {
   if(e.target.innerText === "X"){
    alert("are you sure");
    const del = (e.target.parentNode.parentNode).remove();
   }
}); 

/* ************************ Items Delete End**************************** */


/* ************************ Items Input start**************************** */

function updateTotal(quantity,amount,e){
  const totalAmount =  quantity*amount;

  //console.log(e.target.parentNode.parentNode.children[4].children[0]);
  const total =e.target.parentNode.parentNode.children[4].children[0];
  total.setAttribute('value' , totalAmount);
  calculateAllProductTotal(totalAmount);
  //e.target.setAttribute("value" , 0);
}

let quantity;
let amount;

    function addingAndUpdateInputValues(e){

      //quantity
      
      if(e.target.classList.contains("quantity")){
        quantity = parseInt(e.target.value);
          //console.log(typeof quantity)
          const qutValue = document.querySelector(".quantity");
          e.target.setAttribute("value" , quantity);
         
      }
      //Amount
      if(e.target.classList.contains("amount")){
        amount = Number(e.target.value);
         //console.log(typeof amount)
         const amtValue = document.querySelector(".amount");
         e.target.setAttribute("value" , amount);
      }
      console.log(quantity>0, amount>0);
      //product
      setTimeout(()=>{
        if(quantity>0 && amount>0){
          // console.log("get value" ,quantity*amount);
          updateTotal(quantity,amount,e);
          //changes check once again
          amount = 0;
          quantity=0;
         }
      }, 700);
      
    }





    itemsContainer.addEventListener("input" , addingAndUpdateInputValues)

/* ************************ Items Input End**************************** */

/* ************************ total Start**************************** */
//net Amount
function netAmountCalculate(actualAmount , GST){
       const netSum = (actualAmount+GST);
       document.querySelector(".netAmount").setAttribute("value" , netSum);
}
//gst
function gstCalculate(val){
  const value = val;
  const gstValue = (val*10)/100;
  document.querySelector(".GST").setAttribute("value" , gstValue);
  netAmountCalculate(value,gstValue);
}
//calculateAllProductTotal
var arr= [];
function calculateAllProductTotal(val){
   var gettingTotalValue = val;
   arr.push(gettingTotalValue);
 
 console.log(arr);
 var sumOfAllProducts = 0;
 for(let i=0; i<arr.length; i++){
     sumOfAllProducts = sumOfAllProducts+arr[i];
    console.log(sumOfAllProducts);
    document.querySelector(".totalOfAllProducts").setAttribute("value" , sumOfAllProducts);
    gstCalculate(sumOfAllProducts);
 }
}

/* ************************ total Start**************************** */

//reset
function reset(){
  document.querySelector("tbody").innerHTML = `<tbody class="text-center items-Container">

  <!-- dynamically add itens coloumn here ....... -->

</tbody>`;
}






// function produchht(q,a){
//   return q*a;
// }

// const totalAmountOfProduct = document.querySelector(".totalAmountOfProduct");
// const productBlock = document.querySelector(".productBlock");
// console.log("get value" , totalAmountOfProduct.value);
// let productQuanitity;
//   let proAmt;
// productContainer.addEventListener("input" , (e)=>{
//   var productstore;
//   console.log(e);
  
//   console.log(e.target.classList.contains("quantity"));
//   //quantity

//   if(e.target.classList.contains("quantity")){
//   const className = (e.target.classList[1]);
//   console.log(className);
//    const qua = e.target.value;
//    console.log("quantity data is store",e.target.value);
//    console.log(typeof qua);
//    productQuanitity = parseInt(qua);
//    console.log(typeof productQuanitity);
// }
//   //amount
//   if(e.target.classList.contains("amount")){
//    const amt = e.target.value
//    console.log("amount data is store",amt);
//    console.log(typeof amt);
//    proAmt = parseInt(amt);
//    console.log(typeof proAmt);
//    productstore =( e.target.nextElementSibling.attributes.value);

//   }
//   if(productQuanitity >0 && proAmt > 0){
//     const product = productQuanitity*proAmt;
//       console.log("got out put",produchht(productQuanitity,proAmt))
      

//     // productBlock.addEventListener("click" , (e)=>{
//     //   console.log(e);
//     //   let jj = e.target.attributes.value;
//     //   jj=product;
//     //   console.log(e.target.attributes.value.value
//     //     )
//     //     console.log(jj)
      
//     //     if(e.target.classList.contains("totalAmountOfProduct")){
//     //       totalAmountOfProduct.setAttribute('value',jj);

//     //     }
//     // }) 
 
   
   
      
//       //console.log(e.target.classList.contains("quantity"))
//   }




//  // console.log(productQuanitity,productAmount);
//   //console.log(product(productQuanitity,productAmount)
// //   const product = product(6,7);
// //console.log(6,7);
// })






// var productQuantity;
// var productAmount;
/* **************************************************** */

 /*  Total Amount */
/* **************************************************** */
//  const quantity = document.querySelector(".quantity");

//  const amount = document.querySelector(".amount");

//  const totalAmountOfProduct = document.querySelector(".totalAmountOfProduct");

//  const productAmount = document.querySelector("#productAmount");
 
//  const gst = document.querySelector("#gst");

//  const amountToBePaid = document.querySelector("#netAmount");

// function totaAmount(){
//    const quantityValue = quantity.value;
//    console.log(quantityValue);
//    const amountValue = amount.value;
//    console.log(amountValue);
//    const product = (amountValue*quantityValue);
//    console.log(product);
//    totalAmountOfProduct.setAttribute('value' , `${product}`);
//    productAmount.setAttribute('value', `${product}`);
//    const gstValue = gst.value;
//    const finalAmount=((gstValue*product)/100)+product;
//    amountToBePaid.setAttribute('value' ,`${finalAmount}`);
//    console.log(finalAmount); 
   
// }
// let quantityinput = quantity.addEventListener("keyup", totaAmount);
// let amountinput = amount.addEventListener("keyup", totaAmount);


// function totalAmount(productQuantity , ProductAmount){
//    return product = ProductAmount*productQuantity;
// }


// function tt(){
//       const productContainer = document.querySelector("#productContainer");
//    //console.log(productContainer.childNodes[3].value);//quantity
//    //console.log(productContainer.childNodes[5].value);//amount
//    var q;
//    var a;
   
//    var bb=1;
//    var cc=1;
//    productContainer.addEventListener("input", (e)=>{
      
      
//       if(e.target.classList.contains("quantity")){
//          console.log("quantity",e.target.value);
//          q = parseInt(e.target.value);
//          bb=q;
//       }
//       if(e.target.classList.contains("amount")){
//          console.log("amount" ,e.target.value);
//          a = parseInt( e.target.value);
//          cc=a;
//       }
//       console.log("bb" , bb);
//       console.log("cc" , cc);
//       const product = (bb*cc);
//       console.log(product);
//       totalAmountOfProduct.setAttribute('value' , `${product}`);
//    })
//    //console.log(bb, a);
  
// }

//productContainer.addEventListener("keydown", tt);
// let quantityinput = quantity.addEventListener("keydown", tt);
// let amountinput = amount.addEventListener("keydown", tt);

//console.log(totalAmount("ppq" , q ,a));

