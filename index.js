import {menuArray} from "/data.js"


/*const hiddenEl = document.getElementById("hidden")*/
 let orderArray = []
 let totalArray = []
const orderEl = document.getElementById("order")
const CompleteOrder = document.getElementById("complet-order")

document.addEventListener("submit", function(e){

      e.preventDefault()
      payment()
  
})

document.addEventListener("click", function(e){
 if (e.target.dataset.add){
     addOrderClick (e.target.dataset.add)
 }
 else if (e.target.dataset.remove && orderArray.length !== 0 ){
     removeOrder(e.target.dataset.remove)

 }
  else if (e.target.id === "complete-order" && totalArray.length !== 0){
      completeOrder ()
  }
  
  
  
 
 })
 
 
 function completeOrder(){ 
         document.getElementById("payment").style.display = "flex" 
     
    
 }
 
 function addOrderClick (orderId){
     let addOrderHtml = ``
     
   
     const targetOrderObj = menuArray.filter(function(order){
        return order.id === parseInt(orderId)
    })[0]

      document.getElementById("order-made").innerHTML += `
        <div class = "order-made" >
                    <p>${targetOrderObj.name} <span><button data-remove = "${targetOrderObj.id}" class="remove" >remove</button></span></p>
                    <p class="price" >$${targetOrderObj.price}</p>
        </div>
    `
    totalArray.push(targetOrderObj.price)
    orderArray.push( document.getElementById("order-made").innerHTML)
      
    document.getElementById("total").textContent = "$" + totalArray.reduce((a, b) => a + b)
    document.getElementById("hidden").style.visibility = "visible"
    
     
 }
 
 function removeOrder (orderId){
     const remove = orderArray.findIndex(checkIndex)
     function checkIndex(orderArrays){
         return orderArrays === parseInt(orderId)
     }

    orderArray.splice(remove, 1)
    totalArray.splice(remove, 1)
       
     document.getElementById("order-made").innerHTML = orderArray
     if (totalArray.length === 0){
         document.getElementById("total").textContent = ""
     }
     else{
         document.getElementById("total").textContent = "$" + totalArray.reduce((a, b) => a + b)
     }
     

 }
    

function orderInnerHtml(){
    let orderHtml = ``
    menuArray.forEach(function(order){
        orderHtml += `
            <section class = "pizza-section">
                <div class = "pizza">
                    <p class = "emoji" >${order.emoji}</p>
                    <div class = "detail">   
                        <p class = "bold">${order.name}</p>
                        <p>${order.ingredients}</p>
                        <p class = "bold">$${order.price}</p>
                    </div>
                </div>
                <button class = "btn" data-add = "${order.id}">+</button>
            </section>
        `
    })
    return orderHtml
}

function render(){
    orderEl.innerHTML = orderInnerHtml()
}

function payment(){
    
   
    document.getElementById("payment").style.display = "none"
    document.getElementById("farewell").style.visibility = "visible"
    document.getElementById("hidden").style.visibility = "hidden"
   
    
    
    
    
}
 render ()
