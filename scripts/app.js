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
        grandTotal();
    });
}

function selectSeat(elementID) {
    const seatNumberElement = document.getElementById(elementID);
    seatNumberElement.style.backgroundColor = "#1DD100";
    seatNumberElement.style.color = "white";
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
}
function grandTotal(){
    const grandTotalElement=document.getElementById('grandTotal');
    const totalPriceElement=document.getElementById('totalPrice');
    const totalPriceString=totalPriceElement.innerText;
    const totalPrice=parseInt(totalPriceString);
    grandTotalElement.innerText=totalPrice;
}