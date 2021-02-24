async function fetchNorris() {
  const urlToFetch = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(urlToFetch);
  const norrisData = await response.json();
  console.log(norrisData);
  return norrisData;
}

fetchNorris();

const $submit = $("#button");
const $factDiv = $("#fact1");
