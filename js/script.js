/* ***********************Add Items Colums ***************************** */
 //invoice&date

 const invoiceNo_date = document.querySelector("#invoiceNo_date");
 invoiceNo_date.addEventListener("input" , (e)=>{
    console.log(e.target.value);
 })

//Taking input for billings

function billingInputTaking(e){
  if(e.target.classList.contains("companyName")){
    const val = e.target.value;
    e.target.setAttribute("value" , val);
   }
   if(e.target.classList.contains("address")){
    const val = e.target.value;
    e.target.setAttribute("value" , val);
   }
   if(e.target.classList.contains("email")){
    const val = e.target.value;
    e.target.setAttribute("value" , val);
   }
   if(e.target.classList.contains("billingAdd")){
    const val = e.target.value;
    e.target.setAttribute("value" , val);
   }
   if(e.target.classList.contains("PinCode")){
    const val = e.target.value;
    e.target.setAttribute("value" , val);
   }
}


const billBy = document.querySelector("#billBy");
billBy.addEventListener("input" , billingInputTaking);

const billTo = document.querySelector("#billTo");
billTo.addEventListener("input" , billingInputTaking);

//Taking input for billings end


const itemsContainer = document.querySelector(".items-Container");
//invioce review
const itemsContainerTwo = document.querySelector(".items-ContainerTwo");

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
    <th >${count}</th>
    <td>  <input type="text"  class="form-control text-center ${count} Product" placeholder="Product" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <input type="number" class="form-control text-center ${count} quantity" placeholder="quantity" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <input type="number" class="form-control text-center ${count} amount" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <input type="" class="form-control text-center ${count} total" placeholder="total" aria-label="Username" aria-describedby="basic-addon1"></td>
    <td>  <button type="button" class="btn btn-danger ${count} deleteBtn">X</button></td>
   </tr>`;    
  }

}

table.addEventListener("click", addProdductItem);

/* ************************ Add Items Colums End**************************** */

/* ************************ Items Delete **************************** */

itemsContainer.addEventListener("click" , (e) => {
   if(e.target.innerText === "X"){
    alert("are you sure");
    const del = (e.target.parentNode.parentNode).remove();
    //console.log("delet part" , e.target.parentNode.parentNode.children[4].children[0].attributes.value);
    const totalValue = e.target.parentNode.parentNode.children[4].children[0].value;
    console.log(totalValue);
    console.log( e.target.parentNode.parentNode.children[0].innerText);
    //using as a indexNo
    const counting = e.target.parentNode.parentNode.children[0].innerText;
    const index = parseInt(counting-1); 
    let sum = 0;
    for(let i=0; i<arr.length; i++){
          console.log("delet part" , arr.length);
          sum+=arr[i];
          console.log("delet part",sum);
         if(i===index){
          arr.splice(index,1);
         }
    }
    console.log(arr);
    console.log("delet part" , arr.length);
    calculateAllProductTotal(0);
   }
}); 

/* ************************ Items Delete End**************************** */


/* ************************ Items Input start**************************** */

function updateTotal(quantity,amount,e){
  const totalAmount =  quantity*amount;

  //console.log(e.target.parentNode.parentNode.children[4].children[0]);
  const total =e.target.parentNode.parentNode.children[4].children[0];
  total.setAttribute('value' , totalAmount);
  //function calling which calculate my total sum of all products and gst or netAmount
  calculateAllProductTotal(totalAmount);
}

let quantity;
let amount;
let Product;

    function addingAndUpdateInputValues(e){
      let productValue;
      let quantityValue;
      let amountValue;
      
      //product
      if(e.target.classList.contains("Product")){
        Product = (e.target.value);
          //console.log(typeof quantity)
          productValue =(e.target.value);
          e.target.setAttribute("value" , Product);
         
      }
      //quantity
      
      if(e.target.classList.contains("quantity")){
        quantity = parseInt(e.target.value);
          //console.log(typeof quantity)
          quantityValue = parseInt(e.target.value);
          e.target.setAttribute("value" , quantity);
         
      }
      //Amount
      if(e.target.classList.contains("amount")){
        amount = Number(e.target.value);
         //console.log(typeof amount)
         const amountValue =  Number(e.target.value);
         e.target.setAttribute("value" , amount);
      }
      
      //product of quantity and amount
      setTimeout(()=>{
        if(quantity>0 && amount>0 && Product !=" "){
          // console.log("get value" ,quantity*amount);
          updateTotal(quantity,amount,e);
          //changes check once again
          amount = 0;
          quantity=0;
         }
      }, 700);
      
    
    }



    // function takingInputValue(){
    //   let product = document.querySelector(".Product").value;
    //   let quantity = document.querySelector(".quantity").value;
    //   let amount = document.querySelector(".amount").value;
    //   //let productOfQuantityAmount = document.querySelector("").value;

    //   //console.log("new value" , product);
      
    // }
  

     //calling my stored
    itemsContainer.addEventListener("input" , addingAndUpdateInputValues);
   

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
    document.querySelector("#totalOfAllProducts").setAttribute("value" , sumOfAllProducts);
    gstCalculate(sumOfAllProducts);
 }
}

/* ************************ total Start**************************** */

//reset
function reset(){
  document.querySelector("tbody").innerHTML = `<tbody class="text-center items-Container">
  
  <!-- dynamically add itens coloumn here ....... -->

</tbody>`;
//bottom main calculation section (total, gst , netAmount)
document.querySelector("#totalOfAllProducts").setAttribute("value" , "");
document.querySelector(".GST").setAttribute("value" , "");
document.querySelector(".netAmount").setAttribute("value" , "");
arr = [];
}



//invoice review

const invoiceReview = document.querySelector("#invoiceReview");
invoiceReview.addEventListener("click" , ()=>{
  //billBy
  document.querySelector(".company-NameBB").innerText = document.querySelector(".companyNameBB").value;
  document.querySelector(".addressBB").innerText = document.querySelector(".addressBB").value;
  document.querySelector(".emailBB").innerText = document.querySelector(".emailBB").value;
  document.querySelector(".pinBB").innerText = document.querySelector(".billingAddBB").value;
  //billfrom
  document.querySelector(".company-NameBF").innerText = document.querySelector(".companyNameBF").value;
  document.querySelector(".addressBF").innerText = document.querySelector(".addressBF").value;
  document.querySelector(".emailBF").innerText = document.querySelector(".emailBF").value;
  document.querySelector(".pinBF").innerText = document.querySelector(".billingAddBF").value;
  addProdductItem()
})
