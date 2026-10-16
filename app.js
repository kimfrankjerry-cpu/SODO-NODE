async function handleVending() {
    console.log("1. Initiated M-Pesa STK push...");

    // We tell JavaScript: PAUSE here until Safaricom resolves this promise!
    const paymentResult = await checkPaymentWithSafaricom();

    if (paymentResult === "success") {
        console.log("Dispensing product...");
    }
    if (paymentResult === "fail") {
        console.log("Please try again");
    }
}

function checkPaymentWithSafaricom() {

}
handleVending();
