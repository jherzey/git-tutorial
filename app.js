const btn = document.querySelector("button");
const para = document.querySelector("p");

btn.addEventListener("click", () => {
  fetch("./bacon.json")
    .then(res => res.text())
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.error(e);
    });
});
