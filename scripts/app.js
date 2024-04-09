// document.getElementById('a1').addEventListener('click', function () {
//     const totalSeatElement = document.getElementById('seatLeft');
//     const totalSeat = parseInt(totalSeatElement.innerText);
//     const seatSelectCount = 1;
//     const totalAvailableSeat = totalSeat - seatSelectCount;
//     totalSeatElement.innerText=totalAvailableSeat;
//     const seatNumberElement=document.getElementById('a1');
//     seatNumberElement.style.backgroundColor="green";
//     seatNumberElement.style.color="white";
// })

//Seat Selection Function
    const seatNumbers=document.getElementsByClassName('seatNumber');
    
    for(const seatNumber of seatNumbers){
        const seatID=seatNumber.innerText.toLowerCase();
        document.getElementById(seatID).addEventListener('click',function(){
            const seatNumberElement=document.getElementById(seatID);
            seatNumberElement.style.backgroundColor="#1DD100";
            seatNumberElement.style.color="white";
        })
    }

