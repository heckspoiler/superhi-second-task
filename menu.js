const menu = document.querySelector("a.toggle-nav");
const mainSection = document.querySelector("main");

// when i click the toggle class, toggle a class of "open" on the main section

menu.addEventListener("click", () => {
  mainSection.classList.toggle("open");

  // if its open, make the toggle tag say close and if it's closed, make it say menu
  const isOpen = mainSection.classList.contains("open");
  if (isOpen) {
    menu.innerHTML = `<img src="assets/assets/close.svg" alt="close menu" /> Close`;
  } else {
    menu.innerHTML = `<img src="assets/assets/menu.svg" alt="close menu" /> Menu`;
  }
});
