const scriptURL = 'https://script.google.com/macros/s/AKfycbwhGMxU_mZ0GRYR6M9BgafnkAMIonSNNzXmRpSKiQIDx8MQGuEVZ8mwgQd4se4rJL6tZg/exec';
const paymentMethod = document.getElementById("paymentMethod");
const paymentDetails = document.getElementById("paymentDetails");
const qrCode = document.getElementById("qrCode");
const paymentNumber = document.getElementById("paymentNumber");

// বিকাশ, নগদ, রকেটের QR কোড ও নাম্বার
const paymentInfo = {
    "bkash": { "qr": "bkash-qr.png", "number": "017XXXXXXXX" },
    "nagad": { "qr": "nagad-qr.png", "number": "018XXXXXXXX" },
    "rocket": { "qr": "rocket-qr.png", "number": "019XXXXXXXX" }
};

// পেমেন্ট অপশন পরিবর্তন হলে QR কোড ও নাম্বার দেখাবে
paymentMethod.addEventListener("change", function() {
    const selectedMethod = paymentMethod.value;
    if (selectedMethod) {
        qrCode.src = paymentInfo[selectedMethod].qr;
        paymentNumber.textContent = paymentInfo[selectedMethod].number;
        paymentDetails.style.display = "block";
    } else {
        paymentDetails.style.display = "none";
    }
});

// গুগল শিটে ডাটা পাঠানোর ফাংশন
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const selectedMethod = paymentMethod.value;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('amount', amount);
    formData.append('paymentMethod', selectedMethod);

    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => alert('ডোনেশন সফলভাবে গ্রহণ করা হয়েছে!'))
        .catch(error => console.error('Error!', error.message));
});