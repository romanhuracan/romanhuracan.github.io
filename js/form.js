export function vision(obj, vision) {
    // Показывает или скрывает объект с помощью
    // CSS-свойств visibility и opacity
    if (vision === "off") {
    obj.style.visibility = "hidden";
    obj.style.opacity = 0;
    }
    else if (vision === "on") {
        obj.style.visibility = "visible";
        obj.style.opacity = 1;
    }
}

// Получаем объект - кнопка для отправки формы
let formButton = document.getElementById("formButton");
const body = document.querySelector("body");

// Кнопка позвоните мне! для открытия формы
let callBackBtn = document.querySelector(".callback");

// Сам объект формы
let contactForm = document.querySelector(".modal");

// Блок успешной отправки формы
let successfulSubmission = document.querySelector(".successfulSubmission");

// Вешаем на кнопку событие клик
formButton.addEventListener("click", function (e) {
    // Предотвращаем перезагрузку страницы
    e.preventDefault();

    // Получаем объекты - input 
    let name = document.getElementById("formName");
    let email = document.getElementById("formEmail");
    let phone = document.getElementById("formPhone");
    let message = document.getElementById("formMessage");

    // Записываем данные в словарь со значениями
    let entry = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    };

    // Делаем асинхронную обработку
    fetch(`${window.origin}/sending-form`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(entry),
      cache: "no-cache",
      headers: new Headers({
          "content-type": "application/json"
      })  
    })
    .then(function (response) {

        if (response.status !== 200) {

            console.log(`Response status was not 200: ${response.status}`);
            return ;
        }

        response.json().then(function (data) {
            vision(successfulSubmission, "on");
            setTimeout(vision, 3000, successfulSubmission, "off");
        })

    })

});

// Показываем контактную форму при нажатии на кнопку ПОЗВОНИТЕ МНЕ!
callBackBtn.addEventListener("click", function () {
    vision(contactForm, "on");
    body.style.overflowY = "hidden";
});

contactForm.addEventListener("click", function(e) {
    if (e.target === document.querySelector(".modal")) {
        vision(contactForm, "off");
        body.style.overflowY = "visible";
    }
});