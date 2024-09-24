function openModal() {
    document.getElementById('modal').classList.remove('hidden');
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}



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
    if (!isNaN(nInput) && nInput > 0) {
        noakhaliDonation += nInput;
        document.getElementById('noakhaliDonation').innerText = noakhaliDonation;
        
        totalAmount -= nInput;
        document.getElementById('toatalAmount').innerText = totalAmount;
        
     
    } else {
        alert("Try Agian")
    }

   
})

fdonationBtn.addEventListener('click',function(){
    let fInput= parseFloat(document.getElementById('fInput').value)
    if (!isNaN(fInput) && fInput > 0) {
        feniDonation += fInput;
        document.getElementById('feniDonation').innerText = feniDonation;
        
        totalAmount -= fInput;
        document.getElementById('toatalAmount').innerText = totalAmount;
        
      
    } else {
        alert("Try Agian")
    }

   
})



qdonationBtn.addEventListener('click',function(){
    let qInput= parseFloat(document.getElementById('qInput').value)
    if (!isNaN(qInput) && qInput > 0) {
        quotaDonation += qInput;
        document.getElementById('quotaDonation').innerText = quotaDonation;
        
        totalAmount -= qInput;
        document.getElementById('toatalAmount').innerText = totalAmount;
        
      
    } else {
        alert("Try again ")
    }
 
   
})



// history Section


const dBtn = document.getElementById('donation-btn');
const hBtn = document.getElementById('history-Btn');



hBtn.addEventListener('click', function () {
    hBtn.classList.add('bg-btn-color1');
    hBtn.classList.remove('bg-gray-200');
    dBtn.classList.remove('bg-gray-200');
    dBtn.classList.add('bg-btn-color1');
    
    document.getElementById('donanation-section').classList.add('hidden');
    document.getElementById('History-section').classList.remove('hidden');
})

