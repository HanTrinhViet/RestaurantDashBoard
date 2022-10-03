"use strict";

const btnSubscribe = document.querySelector(".btn-subcribe");
const email = document.querySelector(".mail-box");

btnSubscribe.addEventListener("click", function () {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) { // biểu thức chính quy regex expression 
    alert("Subscribed Successfully!");
  } else {
    alert("You have entered an invalid email address!");
  }
});

// function phonum() {
//   var phone = document.getElementById("number");
//   if (phone.value.length !== 11) {
//     alert("Phone number is not valid");
//   }
// }
