var butslaid1=document.querySelector(".but-slaid-1"),butslaid2=document.querySelector(".but-slaid-2"),butslaid3=document.querySelector(".but-slaid-3"),slide1=document.querySelector(".slider-item-1"),slide2=document.querySelector(".slider-item-2"),slide3=document.querySelector(".slider-item-3"),slidenone=document.querySelector(".slider-item-none"),bodyback=document.querySelector(".body-background-1");butslaid1.addEventListener("click",function(a){a.preventDefault(),butslaid1.classList.add("slider-button-active"),butslaid2.classList.remove("slider-button-active"),butslaid3.classList.remove("slider-button-active"),slide1.classList.remove("slider-item-none"),slide1.classList.add("slider-opacity"),slide2.classList.add("slider-item-none"),slide3.classList.add("slider-item-none"),bodyback.classList.remove("body-background-2"),bodyback.classList.remove("body-background-3")}),butslaid2.addEventListener("click",function(a){a.preventDefault(),butslaid1.classList.remove("slider-button-active"),butslaid2.classList.add("slider-button-active"),butslaid3.classList.remove("slider-button-active"),slide1.classList.add("slider-item-none"),slide1.classList.remove("slider-opacity"),slide2.classList.remove("slider-item-none"),slide2.classList.add("slider-opacity"),slide3.classList.add("slider-item-none"),slide3.classList.remove("slider-opacity"),bodyback.classList.add("body-background-2"),bodyback.classList.remove("body-background-3")}),butslaid3.addEventListener("click",function(a){a.preventDefault(),butslaid1.classList.remove("slider-button-active"),butslaid2.classList.remove("slider-button-active"),butslaid3.classList.add("slider-button-active"),slide1.classList.add("slider-item-none"),slide1.classList.remove("slider-opacity"),slide2.classList.add("slider-item-none"),slide2.classList.remove("slider-opacity"),slide3.classList.remove("slider-item-none"),slide3.classList.add("slider-opacity"),bodyback.classList.add("body-background-3"),bodyback.classList.remove("body-background-2")});