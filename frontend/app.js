const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_form = document.querySelector(".sign-in-form");
const sign_up_form = document.querySelector(".sign-up-form");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_in_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = sign_in_form.querySelector('input[type="text"]').value;
    const password = sign_in_form.querySelector('input[type="password"]').value;
    if (username === "" || password === "") {
        alert("Fields are empty");
    } else {
        window.location.href = "../../Cafe_Recommendation-main/frontend/index.html";
    }
});

sign_up_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = sign_up_form.querySelector('input[type="text"]').value;
    const email = sign_up_form.querySelector('input[type="email"]').value;
    const password = sign_up_form.querySelector('input[type="password"]').value;
    if (username === "" || email === "" || password === "") {
        alert("Fields are empty");
    } else {
        window.location.href = "../../Cafe_Recommendation-main/frontend/index.html";
    }
});
