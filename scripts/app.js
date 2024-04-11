//Seat Selection Function
const seatNumbers = document.getElementsByClassName('seatNumber');
let seatSelectedCount = 0;
for (const seatNumber of seatNumbers) {
    const seatID = seatNumber.innerText.toLowerCase();
    document.getElementById(seatID).addEventListener('click', function () {
        if (seatSelectedCount === 4) {
            alert("You are not able to select seat more than 04 seat!!!");
        } else {
            const seatSelected = 1;
            seatSelectedCount = seatSelectedCount + 1;
            selectSeat(seatID);
            seatLeft(seatSelected);
            seatCount(seatSelectedCount);
            totalPrice(seatSelectedCount);
            discountSectionActivation(seatSelectedCount);
        }
    });
}

function selectSeat(elementID) {
    const seatNumberElement = document.getElementById(elementID);
    seatNumberElement.style.backgroundColor = "#1DD100";
    seatNumberElement.style.color = "white";
    seatNumberElement.setAttribute("disabled", "");
    appendSelectedSeat(elementID);
}
function seatLeft(selectedSeat) {
    const seatLeftElement = document.getElementById('seatLeft');
    const totalSeatText = seatLeftElement.innerText;
    const totalSeat = parseInt(totalSeatText);
    const totalAvailableSeat = totalSeat - selectedSeat;
    seatLeftElement.innerText = totalAvailableSeat;
}
function seatCount(count) {
    const totalSelectedSeatElement = document.getElementById('totalSelectedSeat');
    totalSelectedSeatElement.innerText = count;
}
function appendSelectedSeat(elementID) {
    const appendSelectSeatElement = document.getElementById('appendSeat');
    const appendSelectSeat = document.createElement('div');
    appendSelectSeat.classList.add('flex');
    appendSelectSeat.classList.add('justify-between');
    appendSelectSeat.classList.add('gap-4');
    appendSelectSeat.innerHTML = `
    <p class="inter-fonts text-base text-[#03071299] uppercase">${elementID}</p>
    <p class="inter-fonts text-base text-[#03071299]">Economoy</p>
    <p class="inter-fonts text-base text-[#03071299]">${550}</p>
    `;
    appendSelectSeatElement.appendChild(appendSelectSeat);
}
function totalPrice(count) {
    const totalPriceElement = document.getElementById('totalPrice');
    const seatPriceElement = document.getElementById('seatPrice');
    const seatPriceString = seatPriceElement.innerText;
    const seatPrice = parseInt(seatPriceString);
    const totalPrice = count * seatPrice;
    totalPriceElement.innerText = totalPrice;
    const grandTotalElement = document.getElementById('grandTotal');
    grandTotalElement.innerText = totalPrice;
}
function grandTotal() {
    const grandTotalElement = document.getElementById('grandTotal');
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPriceString = totalPriceElement.innerText;
    const totalPrice = parseInt(totalPriceString);

    const discountElement = document.getElementById('inputCuponCode');
    const cuponCode = discountElement.value;
    discountElement.value = "";

    const originalCuponElement1 = document.getElementById('cuponCode1');
    const originalCuponCode1 = originalCuponElement1.innerText;

    const originalCuponEleement2 = document.getElementById('cuponCode2');
    const originalCuponCode2 = originalCuponEleement2.innerText;
    if (cuponCode === originalCuponCode1) {
        const totalDiscount = totalPrice * .15;
        const discountElement = document.getElementById('totalDiscount');
        discountElement.innerText = totalDiscount;
        grandTotalElement.innerText = totalPrice - totalDiscount;
        document.getElementById('discounDisplay').classList.remove('hidden');
        document.getElementById('discountSection').classList.add('hidden');
    } else if (cuponCode === originalCuponCode2) {
        const totalDiscount = totalPrice * .20;
        const discountElement = document.getElementById('totalDiscount');
        discountElement.innerText = totalDiscount;
        grandTotalElement.innerText = totalPrice - totalDiscount;
        document.getElementById('discounDisplay').classList.remove('hidden');
        document.getElementById('discountSection').classList.add('hidden');
    } else {
        grandTotalElement.innerText = totalPrice;
        alert('Your cupon code is not valid');
    }
}
function discountSectionActivation(count) {
    const inputCuponElement = document.getElementById('inputCuponCode');
    const applyButtonElement = document.getElementById('applyBtn');
    if (count < 4) {
        inputCuponElement.setAttribute("disabled", "");
        applyButtonElement.setAttribute("disabled", "");
    } else {
        inputCuponElement.removeAttribute("disabled");
        applyButtonElement.removeAttribute("disabled");
    }
}


document.getElementById('phoneNumber').addEventListener('keyup', function () {
    const selectedSeatElement = document.getElementById('totalSelectedSeat');
    const selectedSeatString = selectedSeatElement.innerText;
    const selectedSeat = parseInt(selectedSeatString);
    const mobileNumberElement = document.getElementById('phoneNumber');
    const mobileNumber = mobileNumberElement.value;
    if (selectedSeat && mobileNumber) {
        document.getElementById('nextBtn').removeAttribute("disabled");
    } else {
        document.getElementById('nextBtn').setAttribute('disabled', '');
    }
});
document.getElementById('nextBtn').addEventListener('click', function () {
    document.getElementById('passengerName').value = "";
    document.getElementById('phoneNumber').value = "";
    document.getElementById('emailID').value = "";
    document.getElementById('nextBtn').setAttribute('disabled','');
    document.getElementById('inputCuponCode').setAttribute('disabled','');
    document.getElementById('applyBtn').setAttribute('disabled','');

})

