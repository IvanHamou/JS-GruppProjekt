// Här är fetch-funktionen.
async function fetchNorris() {
  const urlToFetch = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(urlToFetch);
  const norrisData = await response.json();
  console.log(norrisData);
  return norrisData;
}
// Här kallar vi på vår fetch-funktion.
fetchNorris();
// Här ger vi våra HTML-element variabler.
const $submit = $("#button");
const $factDiv = $("#fact1");
