/* **************************************************** */

const productContainer = document.querySelector("#productContainer");
const button = document.querySelector("button");
var count = 0;
function addProdductItem(){
   count = parseInt(count+1);
   productContainer.innerHTML +=`
   <div id=${count} class="productBlock">
   <span>${count}</span>
   &nbsp
   <input type="text"   class ="product ${count}" placeholder="Product">
   <input type="number"   class="quantity ${count}" placeholder="quantity" >
   <input type="number"   class ="amount ${count}" placeholder="amount" >
   <input type=""  class ="totalAmountOfProduct ${count}" value="">
   </div>
   <br><br>`
}
addProdductItem();
button.addEventListener("click", addProdductItem);

const totalAmountOfProduct = document.querySelector(".totalAmountOfProduct");
const productBlock = document.querySelector(".productBlock");
console.log("get value" , totalAmountOfProduct.value);
let productQuanitity;
  let proAmt;
productContainer.addEventListener("input" , (e)=>{
  var productstore;
  console.log(e);
  
  console.log(e.target.classList.contains("quantity"));
  //quantity

  if(e.target.classList.contains("quantity")){
   const qua = e.target.value;
   console.log("quantity data is store",e.target.value);
   console.log(typeof qua);
   productQuanitity = parseInt(qua);
   console.log(typeof productQuanitity);
}
  //amount
  if(e.target.classList.contains("amount")){
   const amt = e.target.value
   console.log("amount data is store",amt);
   console.log(typeof amt);
   proAmt = parseInt(amt);
   console.log(typeof proAmt);
   productstore =( e.target.nextElementSibling.attributes.value);

  }
  if(productQuanitity >0 && proAmt > 0){
    const product = productQuanitity*proAmt;
    productBlock.addEventListener("click" , (e)=>{
      console.log(e);
      let jj = e.target.attributes.value;
      jj=product;
      console.log(e.target.attributes.value.value
        )
        console.log(jj)
      
        if(e.target.classList.contains("totalAmountOfProduct")){
          totalAmountOfProduct.setAttribute('value',jj);

        }
    }) 
 
   
   
      
      //console.log(e.target.classList.contains("quantity"))
  }

 // console.log(productQuanitity,productAmount);
  //console.log(product(productQuanitity,productAmount)
//   const product = product(6,7);
//console.log(6,7);
})





var productQuantity;
var productAmount;
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

