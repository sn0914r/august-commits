const input = document.querySelector("input");
const label = document.querySelector("label");

document.addEventListener("DOMContentLoaded", () => {
  label.textContent = input.value;
  document.body.style.backgroundColor = input.value;
  input.addEventListener("input", () => {
    label.textContent = input.value;
    document.body.style.backgroundColor = input.value;
  });
});
