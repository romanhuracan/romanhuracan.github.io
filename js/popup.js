import {vision} from "./form.js";

const popUpLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");

if (popUpLinks.length > 0) {
    for (let i = 0; i < popUpLinks.length; i++) {
            const popUpLink = popUpLinks[i];

            popUpLink.addEventListener("click", function (e) {
                const popUpName = popUpLink.getAttribute("href").replace("href", "");
                const currentPopUp = document.querySelector(popUpName);
                vision(currentPopUp, "on");
                body.style.overflowY = "hidden";
                e.preventDefault();
            });
    }
}

const closePopUpBtns = document.querySelectorAll(".closePopUpBtn");

if (closePopUpBtns.length > 0) {
    for (let i = 0; i < closePopUpBtns.length; i++) {
        const closePopUpBtn = closePopUpBtns[i];

        closePopUpBtn.addEventListener("click", function (e) {
            vision(closePopUpBtn.closest(".modal"), "off");
            body.style.overflowY = "visible";
            e.preventDefault();
        });
    }
}

const popups = document.querySelectorAll(".modal");
console.log(popups);