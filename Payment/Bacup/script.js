const scriptURL = 'https://script.google.com/macros/s/AKfycbwhGMxU_mZ0GRYR6M9BgafnkAMIonSNNzXmRpSKiQIDx8MQGuEVZ8mwgQd4se4rJL6tZg/exec';

document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('amount', amount);
    formData.append('paymentMethod', paymentMethod);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => alert('ডোনেশন সফলভাবে গ্রহণ করা হয়েছে!'))
        .catch(error => console.error('Error!', error.message));
});
