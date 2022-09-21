console.log(document.URL);
console.log(document.domain);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[9]);
document.all[10].textContent = "salom akang kucaydi dunyo"


console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
const li = document.getElementsByTagName("li")

const title = document.getElementsByTagName("h1");

li[0].style.backgroundColor = "green"

for (let i = 0; i<li.length; i++){
    li[i].style.backgroundColor = "#f1f"
}


// const title = document.getElementsByClassName("title");
title[0].textContent = "alik"

const subtitle = document.getElementById(salomm);
subtitle.textContent="alik"
console.log(subtitle);

