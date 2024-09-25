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

// donationHandle('noakhali-donate-btn', 'noakhali-donate-amount', 'noakhali-amount', 'total-amount', 'history-section');
ndonationBtn.addEventListener('click',function(){
    let nInput= parseFloat(document.getElementById('nInput').value)
    if (!isNaN(nInput) && nInput > 0 && nInput < totalAmount) {
        noakhaliDonation += nInput;
        document.getElementById('noakhaliDonation').innerText = noakhaliDonation;
        
        totalAmount -= nInput;
        document.getElementById('toatalAmount').innerText = totalAmount;

        const ShowModal = document.getElementById('my_modal_1');
        ShowModal.showModal();
        

        let title = document.getElementById(titleId).textContent;

        let history = document.getElementById(history-section);
        let newHistory = document.createElement('div');

        newHistory.innerHTML = `
            <div class="flex flex-col p-5 bg-white border border-border-color rounded-2xl">
                <h3 class="text-lg font-bold">
                    ${nInput.toFixed(2)} Taka is ${title}
                </h3>
                <p id="history-date" class="text-sm md:text-base text-paragraph-color">
                </p>
            </div>
            `

        history.insertBefore(newHistory, history.firstChild);

        const date = new Date();
        newHistory.querySelector("#history-date").innerText = "Date: " + date.toString();

     
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


function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' });
}


document.getElementById('fbtn').addEventListener('click', donateFeni);

function donateFeni() {
    const amount = document.getElementById('fInput').value;
    addToHistory('Flood Relief in Feni, Bangladesh', amount);
}


document.getElementById('nbtn').addEventListener('click', donateNoakhali);
function donateNoakhali() {
    const amount = document.getElementById('nInput').value;
    addToHistory('Flood at Noakhali, Bangladesh', amount);
}


document.getElementById('qbtn').addEventListener('click', donateQuota);
function donateQuota() {
    const amount = document.getElementById('qInput').value;
    addToHistory('Aid for Injured in the Quota Movement', amount);
}




// Function to add donation to history
function addToHistory(title, amount) {

    if (!isNaN(amount) && amount > 0 && amount < totalAmount) {

    const historySection = document.getElementById('history-section');
    const donationDate = getCurrentDateTime();

    const historyItem = `
        <div class="card bg-base-100 border border-xl pb-10 w-10/12 mx-auto  px-10 py-10">
            <h2 class="font-bold">${amount} Taka is Donated for ${title}</h2>
            <p>Date: ${donationDate}</p>
        </div>
    `;

    historySection.innerHTML = historyItem + historySection.innerHTML;
    }
    
}