"use strict"

const yes = document.getElementById("yes");
const no = document.getElementById("no");
const link = document.getElementById("link");


link.classList.add("hidden");

yes.addEventListener("click",()=>{
    link.classList.remove("hidden");
});
no.addEventListener("click",()=>{
    link.classList.add("hidden");
});