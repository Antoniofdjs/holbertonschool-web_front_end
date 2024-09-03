// Define the changeMode function
const changeMode = (size, weight, transform, background, color) => {
  return () => {
    // Apply styles to document.body
    document.body.style.fontSize = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
};
// Style Functions
const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

function main() {
  // Inserting elements
  document.body.innerHTML += `<p id="text">Welcome Holberton!</p>`;
  document.body.innerHTML += `<button id="spooky">Spooky</button>`;
  document.body.innerHTML += `<button id="darkMode">Dark Mode</button>`;
  document.body.innerHTML += `<button id="screamMode">Scream Mode</button>`; // Fixed typo

  // Add event listeners
  document.getElementById("spooky").addEventListener("click", spooky);
  document.getElementById("darkMode").addEventListener("click", darkMode);
  document.getElementById("screamMode").addEventListener("click", screamMode);
}
main();
