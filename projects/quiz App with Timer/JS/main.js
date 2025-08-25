document.addEventListener("DOMContentLoaded", function () {
  const s1 = document.querySelector("section");
  const s2 = s1.nextElementSibling;
  const s3 = s2.nextElementSibling;

  const data = [];
  let pointer = 0

  //s2
  const h2 = s2.querySelector("h2");
  const timer = s2.querySelector(".timer");
  const ul = s2.querySelector("ul");
});

function initializeOptions(domRef, options) {
  const ul = document.createElement("ul");
  const listItems = [];
  for (let i = 0; i < 4; i++) {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.setAttribute("data-op", options[i]);
    btn.textContent = options[i];

    li.appendChild(btn);
    listItems.push(li);
  }

  ul.append(listItems.join(""));

  domRef.outerHTML = ul;
}
