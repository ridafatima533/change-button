const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  // Random color generation
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  button.style.backgroundColor = randomColor;
});
