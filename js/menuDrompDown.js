const servicesBtn = document.querySelector(".services-btn");
const servicesDropdown = document.querySelector(".services-dropdown");
const servicesItem = document.querySelector(".servicesItem");

const companyBtn = document.querySelector(".company-btn");
const companyDropdown = document.querySelector(".company-dropdown");
const companyItem = document.querySelector(".companyItem");

const nav = document.querySelector(".header_nav");

//Imgs
const logo = document.querySelector("#imgLogo");
const arrowServices = document.querySelector("#imgDropDown1");
const arrowCompany = document.querySelector("#imgDropDown2");

//Menu Dropdown Services
servicesBtn.addEventListener("click", function() {
    companyItem.style.fontWeight = "lighter"; 
    companyDropdown.style.display = "none";
    servicesDropdown.style.display = (servicesDropdown.style.display === "flex") ? "none" : "flex";

    if (servicesDropdown.style.display === "flex") {
        //Change BacgroundColor
        nav.style.backgroundColor = "white";
        //Change color all a items
        const navLinks1 = document.querySelectorAll(".header_nav a");
        navLinks1.forEach(function(link) {
            link.style.color = "#343D3F";
        });
        //Change color all li items
        const navLi1 = document.querySelectorAll(".header_nav li");
        navLi1.forEach(function(link) {
            link.style.color = "#343D3F";

            servicesItem.style.fontWeight = "bolder";
            //Change imgs white to black 
            logo.src = "../img/Group 1 (1)/Group 1.png";
            arrowServices.src = "../img/Icon feather-chevron-down/Icon feather-chevron-down.png";
        });
    } else {
        nav.style.backgroundColor = "";
        const navLinks1 = document.querySelectorAll(".header_nav a");
        navLinks1.forEach(function(link) {
            link.style.color = "#FFFFFF";
        });
        const navLi1 = document.querySelectorAll(".header_nav li");
        navLi1.forEach(function(link) {
            link.style.color = "#FFFFFF";

            servicesItem.style.fontWeight = "lighter"; 
            //Change imgs black to white
            logo.src = "../img/Group 1/Group 1.png";
            arrowServices.src = "../img/Icon feather-chevron-down-white/Icon feather-chevron-down.png";
        });
    }
});


//Menu Dropdown Company
companyBtn.addEventListener("click", function() {
    servicesDropdown.style.display = "none";
    servicesItem.style.fontWeight = "lighter"; 
    companyDropdown.style.display = (companyDropdown.style.display === "flex") ? "none" : "flex";

    if (companyDropdown.style.display === "flex") {
        //Change BacgroundColor
        nav.style.backgroundColor = "white";
        //Change color all a items
        const navLinks2 = document.querySelectorAll(".header_nav a");
        navLinks2.forEach(function(link) {
            link.style.color = "#343D3F";
        });
        const navLi = document.querySelectorAll(".header_nav li");
        navLi.forEach(function(link) {
            link.style.color = "#343D3F";

            companyItem.style.fontWeight = "bolder"; 
            //Change imgs white to black 
            logo.src = "https://marilynpb.github.io/PromactPage/img/Group_1_(1)/Group_1.png";
            arrowCompany.src = "../img/Icon feather-chevron-down/Icon feather-chevron-down.png";
        });
    } else {
        nav.style.backgroundColor = "";
        const navLinks2 = document.querySelectorAll(".header_nav a");
        navLinks2.forEach(function(link) {
            link.style.color = "#FFFFFF";
        });
        const navLi2 = document.querySelectorAll(".header_nav li");
        navLi2.forEach(function(link) {
            link.style.color = "#FFFFFF";

            companyItem.style.fontWeight = "lighter"; 
            //Change imgs black to white
            logo.src = "../img/Group 1/Group 1.png";
            arrowCompany.src = "https://marilynpb.github.io/PromactPage/img/Icon feather-chevron-down-white/Icon feather-chevron-down.png";
        });
    }
});