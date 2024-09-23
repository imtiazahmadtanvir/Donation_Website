document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const donateBtn = document.getElementById('donateBtn');
    const closeModalBtn = document.getElementById('closeModal');

    // Show the modal when the "Donate Now" button is clicked
    donateBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // Hide the modal when the "Close confirmation" button is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
