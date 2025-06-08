/*
the below code will populate a modal and display to the user
*/

// document.getElementById("form").onsubmit=sendMail;

function sendMail(contactForm) {
    var c_name = contactForm.cust_name.value;
    var c_email = contactForm.cust_email.value;
    // var c_phone = contactForm.cust_phone.value;
    var c_news = contactForm.cust_newsletter.checked;

    if (c_news) {
        alert(`
            Hi ${c_name}!
            Thank you for submitting your query. 
            I will respond to ${c_email} as soon as I can. 
            The monthly newsletter is sent on the first Tuesday of each month.\n
            Regards
            Jo`)
    } else {
        alert(`
            Hi ${c_name}!\n
            Thank you for submitting your query.
            I will respond to ${c_email} as soon as I can.\n
            Regards
            Jo`)
    }
}
