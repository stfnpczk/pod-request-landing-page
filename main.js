const form = document.querySelector(".features__form");
const emailInput = document.querySelector(".features__input");
const errorMessage = document.querySelector(".features__error-message");

const checkEmail = (emailInput) => {
  return emailInput.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkEmail(emailInput.value)
    ? (errorMessage.style.display = "none")
    : (errorMessage.style.display = "block");
});
