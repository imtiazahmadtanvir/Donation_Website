// function openModal() {
//     document.getElementById('modal').classList.remove('hidden');
// }

// function closeModal() {
//     document.getElementById('modal').classList.add('hidden');
// }

function loadHistory(){
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donanation-section').classList.add('hidden');
}
function loadDonation(){
    document.getElementById('donanation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
}

    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    function setActive(button) {
      button1.classList.remove('bg-btn-color1');
      button2.classList.remove('bg-btn-color1');
      button1.classList.add('bg-gray-200');
      button2.classList.add('bg-gray-200');
      
      button.classList.remove('bg-gray-200');
      button.classList.add('bg-btn-color1');
    }

    button1.addEventListener('click', function() {
      setActive(button1);
    });

    button2.addEventListener('click', function() {
      setActive(button2);
    });


let totalAmount= parseFloat(document.getElementById('toatalAmount').innerText)
let noakhaliDonation= parseFloat(document.getElementById('noakhaliDonation').innerText)
let feniDonation=parseFloat( document.getElementById('feniDonation').innerText)
let quotaDonation= parseFloat(document.getElementById('quotaDonation').innerText)
const ndonationBtn= document.getElementById('nbtn')
const fdonationBtn= document.getElementById('fbtn')
const qdonationBtn= document.getElementById('qbtn')


let qInput=parseFloat( document.getElementById('qInput').value)


ndonationBtn.addEventListener('click',function(){
    let nInput= parseFloat(document.getElementById('nInput').value)
    if (!isNaN(nInput) && nInput > 0 && nInput < totalAmount) {
        noakhaliDonation += nInput;
        document.getElementById('noakhaliDonation').innerText = noakhaliDonation;
        
        totalAmount -= nInput;
        document.getElementById('toatalAmount').innerText = totalAmount;

        const ShowModal = document.getElementById('my_modal_1');
        ShowModal.showModal();
        
     
    } else {
        alert("Try Agian")
    }

   
})

fdonationBtn.addEventListener('click',function(){
    let fInput= parseFloat(document.getElementById('fInput').value)
    if (!isNaN(fInput) && fInput > 0 && fInput < totalAmount) {
        feniDonation += fInput;
        document.getElementById('feniDonation').innerText = feniDonation;
        
        totalAmount -= fInput;
        document.getElementById('toatalAmount').innerText = totalAmount;
        const ShowModal = document.getElementById('my_modal_1');
        ShowModal.showModal();
        
      
    } else {
        alert("Try Agian")
    }

   
})



qdonationBtn.addEventListener('click',function(){
    let qInput= parseFloat(document.getElementById('qInput').value)
    if (!isNaN(qInput) && qInput > 0 && qInput < totalAmount ) {
        quotaDonation += qInput;
        document.getElementById('quotaDonation').innerText = quotaDonation;
        
        totalAmount -= qInput;
        document.getElementById('toatalAmount').innerText = totalAmount;
        const ShowModal = document.getElementById('my_modal_1');
        ShowModal.showModal();
        
      
    } else {
        alert("Try again  ")
    }
 
   
})


