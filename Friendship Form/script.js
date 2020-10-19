const name = document.getElementById("name");
const form = document.getElementById("survey-form");
const errorElement = document.getElementById("error");
const thanks = document.getElementById("thank-you");

if (form) {
  form.addEventListener("submit", (e) => {
    let messages = [];
    if (name.value === "" || name.value == null) {
      messages.push("Name is required");
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  });
}

new URLSearchParams(window.location.search).forEach((value, name) => {
  thanks.append(`${name}: ${value}`);
  thanks.append(document.createElement("br"));
});
