let kitchenInput = document.getElementById("kitchen-input");
let addButton = document.getElementById("add-btn");
let kitchenList = document.getElementById("kitchen-items-list");

function addKitchenItems(){
    let kitchendata = kitchenInput.value
    let li = document.createElement('li')
    li.textContent = kitchendata
    li.style.cssText ="animation-name:slideIn"
    kitchenInput.value = ' '
    kitchenInput.focus()
    kitchenList.appendChild(li)
    console.log(li)

    let trashBtn = document.createElement("i")
    trashBtn.classList.add("fas", "fa-trash")
    li.appendChild(trashBtn);
    trashBtn.addEventListener("click",function(){
        li.remove()
    })

}


addButton.addEventListener("click",addKitchenItems);


