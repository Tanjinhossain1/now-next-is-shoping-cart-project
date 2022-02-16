// console.log('I am in a separate file')
function inDcrease(whatIs,input,price){
    const phoneInput = document.getElementById(input+'-input')
    const phoneInputvalue = phoneInput.value;
    const convert = parseInt(phoneInputvalue);
    const phonePrice = document.getElementById(input+'-price');
    if(whatIs == true){
        phoneInput.value = convert + 1;
        const prices = phoneInput.value * price;
        phonePrice.innerText = prices;
    }
    if(whatIs == false){
        if(phoneInput.value > 0){
            phoneInput.value = convert - 1;
            const prices = phoneInput.value  * price;
            phonePrice.innerText = prices;
        }
    }
   const totalSub =  document.getElementById('total-sub');
    const phonePrices = document.getElementById('phone-price');
    const casePrice = document.getElementById('case-price')
    const subTotal = parseInt(phonePrices.innerText) + parseInt(casePrice.innerText)
    totalSub.innerText =  subTotal;
    const totalTax = document.getElementById('total-tax');
    const taxTotal =  totalSub.innerText / 10;
    totalTax.innerText = taxTotal;
    const totalMoney = document.getElementById('total-money');
    totalMoney.innerText = parseInt( totalSub.innerText )+ parseInt( totalTax.innerText) ;
}
function removed(input){
    const phoneInput = document.getElementById(input+'-input')
    phoneInput.value = 0;
}