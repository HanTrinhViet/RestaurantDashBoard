"use strict";

const btnSubscribe = document.querySelector(".btn-subcribe");
const email = document.querySelector(".mail-box");

btnSubscribe.addEventListener("click", function () {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) { // biểu thức chính quy - regular expression 
    alert("Subscribed successfully!");
  } else {
    alert("You have entered an invalid email address!");
  }
});

