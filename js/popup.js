function popUpCondition(popup, condition) {
    // Показывает или скрывает popup с помощью
    // CSS-свойств visibility и opacity
    if (condition === "close") {
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
    }
    else if (condition === "open") {
        popup.style.visibility = "visible";
        popup.style.opacity = 1;
    }
}

const popUpLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");

if (popUpLinks.length > 0) {
    for (let i = 0; i < popUpLinks.length; i++) {
            const popUpLink = popUpLinks[i];

            popUpLink.addEventListener("click", function (e) {
                const popUpName = popUpLink.getAttribute("href").replace("href", "");
                const currentPopUp = document.querySelector(popUpName);
                popUpCondition(currentPopUp, "open");
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
            popUpCondition(closePopUpBtn.closest(".popup"), "close");
            body.style.overflowY = "visible";
            e.preventDefault();
        });
    }
}