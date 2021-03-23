function validationForm(e){
    e.preventDefault()
    let form=document.getElementById("form")
    let alertDanger=document.getElementById("alert-danger")
    let inputCard=document.getElementById("input-card")
    let inputAmount=document.getElementById("input-amount")
    let inputCvc=document.getElementById("input-cvc")
    let inputFirstName=document.getElementById("input-first-name")
    let inputLastName=document.getElementById("input-last-name")
    let inputCity=document.getElementById("input-city")
    let selectState=document.getElementById("select-state")
    let inputPostalCode=document.getElementById("input-postal-code")
    let payment=document.getElementsByName("payment")
    let textarea=document.getElementById("textarea")
    let submit=true
    let labelPayment=document.getElementById("label-payment")
   

    if (inputCard.value.length != 16){
        alertDanger.style.display="block"
        submit=false
        inputCard.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {
        inputCard.style.backgroundColor="white"
    }
    
if (inputCvc.value.length != 3){
        alertDanger.style.display="block"
        submit=false
        inputCvc.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {
        inputCvc.style.backgroundColor="white"
    }

    if (inputAmount.value.length == 0){
        alertDanger.style.display="block"
        submit=false
        inputAmount.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {
        inputAmount.style.backgroundColor="white"
    }
    if (inputFirstName.value.length == 0){
        alertDanger.style.display="block"
        submit=false
        inputFirstName.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {
        inputFirstName.style.backgroundColor="white"
    }
    if (inputLastName.value.length == 0){
        alertDanger.style.display="block"
        submit=false
        inputLastName.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {inputLastName.style.backgroundColor="white"
    }
    if (inputCity.value.length == 0){
        alertDanger.style.display="block"
        submit=false
        inputCity.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {inputCity.style.backgroundColor="white"
    }
    if (selectState.value == "Pick a state"){
        alertDanger.style.display="block"
        submit=false
        selectState.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {selectState.style.backgroundColor="white"
    }
    if (inputPostalCode.value.length == 0){
        alertDanger.style.display="block"
        submit=false
        inputPostalCode.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {inputPostalCode.style.backgroundColor="white"
    }
    if (inputPostalCode.value.length == 0){
        alertDanger.style.display="block"
        submit=false
        inputPostalCode.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {inputPostalCode.style.backgroundColor="white"
    }
    let check=false
    for (let i=0; i<payment.length;i++){

        if (payment[i].checked){
            check=true
            

        }

    }
    if (check == false){
        alertDanger.style.display="block"
        submit=false
        labelPayment.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {labelPayment.style.backgroundColor="white"
    }
    
    if (textarea.value.length == 0){
        alertDanger.style.display="block"
        submit=false
        textarea.style.backgroundColor="rgb(236, 205, 208)"

    }else
    {textarea.style.backgroundColor="white"
    }
    if (submit){
        form.submit()

    }

}