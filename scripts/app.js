//Seat Selection Function
const seatNumbers = document.getElementsByClassName('seatNumber');
let seatSelectedCount=0;
for (const seatNumber of seatNumbers) {
    const seatID = seatNumber.innerText.toLowerCase();
    document.getElementById(seatID).addEventListener('click', function () {
        const seatSelected = 1;
        seatSelectedCount=seatSelectedCount+1;
        selectSeat(seatID);
        seatLeft(seatSelected);
        seatCount(seatSelectedCount);
        appendSelectedSeat(seatID);
        totalPrice(seatSelectedCount);
    });
}

function selectSeat(elementID) {
    const seatNumberElement = document.getElementById(elementID);
    seatNumberElement.style.backgroundColor = "#1DD100";
    seatNumberElement.style.color = "white";
    seatNumberElement.setAttribute("disabled","");
}
function seatLeft(selectedSeat){
    const seatLeftElement=document.getElementById('seatLeft');
    const totalSeatText=seatLeftElement.innerText;
    const totalSeat=parseInt(totalSeatText);
    const totalAvailableSeat=totalSeat-selectedSeat;
    seatLeftElement.innerText=totalAvailableSeat;
}
function seatCount(count){
    const totalSelectedSeatElement=document.getElementById('totalSelectedSeat');
    totalSelectedSeatElement.innerText=count;
}
function appendSelectedSeat(elementID){
    const appendSelectSeatElement=document.getElementById('appendSeat');
    const appendSelectSeat=document.createElement('div');
    appendSelectSeat.classList.add('flex');
    appendSelectSeat.classList.add('justify-between');
    appendSelectSeat.classList.add('gap-4');
    appendSelectSeat.innerHTML=`
    <p class="inter-fonts text-base text-[#03071299] uppercase">${elementID}</p>
    <p class="inter-fonts text-base text-[#03071299]">Economoy</p>
    <p class="inter-fonts text-base text-[#03071299]">${550}</p>
    `;
    appendSelectSeatElement.appendChild(appendSelectSeat);
}
function totalPrice(count){
    const totalPriceElement=document.getElementById('totalPrice');
    const totalPrice=count*550;
    totalPriceElement.innerText=totalPrice;
    const grandTotalElement=document.getElementById('grandTotal');
    grandTotalElement.innerText=totalPrice;
}
function grandTotal(){
    const grandTotalElement=document.getElementById('grandTotal');
    const totalPriceElement=document.getElementById('totalPrice');
    const totalPriceString=totalPriceElement.innerText;
    const totalPrice=parseInt(totalPriceString);

    const discountElement=document.getElementById('inputCuponCode');
    const cuponCode=discountElement.value;
    discountElement.value="";

    const originalCuponElement1=document.getElementById('cuponCode1');
    const originalCuponCode1=originalCuponElement1.innerText;

    const originalCuponEleement2=document.getElementById('cuponCode2');
    const originalCuponCode2=originalCuponEleement2.innerText;
    if(cuponCode===originalCuponCode1){
        const totalDiscount=totalPrice*.15;
        const discountElement=document.getElementById('totalDiscount');
        discountElement.innerText=totalDiscount;
        grandTotalElement.innerText=totalPrice-totalDiscount;
        document.getElementById('discounDisplay').classList.remove('hidden');
    }else if(cuponCode===originalCuponCode2){
        const totalDiscount=totalPrice*.20;
        const discountElement=document.getElementById('totalDiscount');
        discountElement.innerText=totalDiscount;
        grandTotalElement.innerText=totalPrice-totalDiscount;
        document.getElementById('discounDisplay').classList.remove('hidden');
    }else{
        grandTotalElement.innerText=totalPrice;
    }
    document.getElementById('applyBtn').setAttribute("disabled","");
}
