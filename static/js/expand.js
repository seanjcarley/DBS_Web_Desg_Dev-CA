/* 
the below code will show or hide the testimonials based on the button clicked 
*/

// event listeners
document.getElementById("accordion-btn-1").addEventListener("click", expandTestimonial_1);
document.getElementById("accordion-btn-2").addEventListener("click", expandTestimonial_2);
document.getElementById("accordion-btn-3").addEventListener("click", expandTestimonial_3);
document.getElementById("accordion-btn-4").addEventListener("click", expandTestimonial_4);

function expandTestimonial_1() {
    this.classList.toggle("active");  // add the active class to the element
    // define button variables
    button1 = document.getElementById("review-1");
    button2 = document.getElementById("review-2");
    button3 = document.getElementById("review-3");
    button4 = document.getElementById("review-4");

    // if the testimonial is showing, hide it
    if (button1.style.display == "block") {
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        // make all testimonial footers centre aligned
        document.getElementById("rf1").className = "";
        document.getElementById("rf2").className = "";
        document.getElementById("rf3").className = "";
        document.getElementById("rf4").className = "";
    } else {  // if not show it
        button1.style.display = "block";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        // left align the active testimonial footer
        document.getElementById("rf1").classList.add("left-align");
        document.getElementById("rf2").className = "";
        document.getElementById("rf3").className = "";
        document.getElementById("rf4").className = "";
    }
}

function expandTestimonial_2() {
    this.classList.toggle("active");  // add the active class to the element
    // define button variables
    button1 = document.getElementById("review-1");
    button2 = document.getElementById("review-2");
    button3 = document.getElementById("review-3");
    button4 = document.getElementById("review-4");

    // if the testimonial is showing, hide it
    if (button2.style.display == "block") {
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        // make all testimonial footers centre aligned
        document.getElementById("rf1").className = "";
        document.getElementById("rf2").className = "";
        document.getElementById("rf3").className = "";
        document.getElementById("rf4").className = "";
    } else {  // if not show it
        button1.style.display = "none";
        button2.style.display = "block";
        button3.style.display = "none";
        button4.style.display = "none";
        // left align the active testimonial footer
        document.getElementById("rf1").className = "";
        document.getElementById("rf2").classList.add("left-align");
        document.getElementById("rf3").className = "";
        document.getElementById("rf4").className = "";
    }
}

function expandTestimonial_3() {
    this.classList.toggle("active");  // add the active class to the element
    // define button variables
    button1 = document.getElementById("review-1");
    button2 = document.getElementById("review-2");
    button3 = document.getElementById("review-3");
    button4 = document.getElementById("review-4");

    // if the testimonial is showing, hide it
    if (button3.style.display == "block") {
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        // make all testimonial footers centre aligned
        document.getElementById("rf1").className = "";
        document.getElementById("rf2").className = "";
        document.getElementById("rf3").className = "";
        document.getElementById("rf4").className = "";
    } else {  // if not show it
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "block";
        button4.style.display = "none";
        // left align the active testimonial footer
        document.getElementById("rf1").className = "";
        document.getElementById("rf2").className = "";
        document.getElementById("rf3").classList.add("left-align");
        document.getElementById("rf4").className = "";
    }
}

function expandTestimonial_4() {
    this.classList.toggle("active");  // add the active class to the element
    // define button variables
    button1 = document.getElementById("review-1");
    button2 = document.getElementById("review-2");
    button3 = document.getElementById("review-3");
    button4 = document.getElementById("review-4");

    // if the testimonial is showing, hide it
    if (button4.style.display == "block") {
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
        // make all testimonial footers centre aligned
        document.getElementById("rf1").className = "";
        document.getElementById("rf2").className = "";
        document.getElementById("rf3").className = "";
        document.getElementById("rf4").className = "";
    } else {  // if not show it
        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "block";
        // left align the active testimonial footer
        document.getElementById("rf1").className = "";
        document.getElementById("rf2").className = "";
        document.getElementById("rf3").className = "";
        document.getElementById("rf4").classList.add("left-align");
    }
}

/* ************************************************************************* */
// trying to combine the above 4 functions in to one function
/* ************************************************************************* */

// document.getElementById("accordion-btn-1").addEventListener("click", expandTestimonial(0));
// document.getElementById("accordion-btn-2").addEventListener("click", expandTestimonial(1));
// document.getElementById("accordion-btn-3").addEventListener("click", expandTestimonial(2));
// document.getElementById("accordion-btn-4").addEventListener("click", expandTestimonial(3));

// function expandTestimonial(num) {
//     // define button variables
//     this.classList.toggle("active");  // add the active class to the element
//     button0 = document.getElementById("review-1");
//     button1 = document.getElementById("review-2");
//     button2 = document.getElementById("review-3");
//     button3 = document.getElementById("review-4");

//     buttons = [button0, button1, button2, button3];

//     if (buttons[num].style.display == "block") {
//         buttons[num].style.display == "none";
//     } else {
//         for (b in buttons) {
//             if (buttons.indexOf(b) == num) {
//                 b.style.display == "block";
//             } else {
//                 b.style.display == "none";
//             }
//         }
//     }
// }

/* ************************************************************************* */

/* ************************************************************************* */